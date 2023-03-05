import * as React from 'react'

import { Checkbox, Flex } from '@gunspace/components'
import { Button } from '@gunspace/components/Button'
import { pickPercentileRandom, pickRandom } from '@gunspace/utils'

import {
  Caliber,
  GunAction,
  GunMagazine,
  GunShape,
  Material,
  Optics,
  PistolActions,
  PistolCalibers,
  PistolMags,
  RifleActions,
  RifleCalibers,
  RifleMags,
  TriggerMechanism,
  ValueOf
} from '@gunspace/types'

import * as Styled from './styled'

type GeneratedIdea = {
  caliber: Caliber,
  magazine: GunMagazine,
  action: GunAction,
  shape: GunShape,
  triggerMechanism: TriggerMechanism,
  optics: Optics,
  material: Material,
}

const titles: { [k in keyof GeneratedIdea]: string } = {
  action: 'Action',
  caliber: 'Caliber',
  magazine: 'Ammo Feeding',
  optics: 'Aiming',
  shape: 'Gun Type',
  triggerMechanism: 'Trigger position',
  material: 'Main material',
}

// View component
export const IdeasView: React.FC = () => {
  const [logicEnabled, setLogic] = React.useState(true)
  const [weights, setWeights] = React.useState({
    triggerMechanism: true,
    material: true,
  })
  const [generatedIdea, setGeneratedIdea] = React.useState<GeneratedIdea | null>(null)

  const toggleLogic = React.useCallback(() => {
    setLogic(status => !status)
  }, [logicEnabled])

  // Filter a part depending on idea params
  const filterPart = React.useCallback((idea: GeneratedIdea) => ([key]: readonly [
    keyof GeneratedIdea,
    ValueOf<GeneratedIdea>,
  ]) => !(
    (
      key === 'magazine' && [
        GunAction.Revolving,
        GunAction.SingleShot,
      ].includes(idea.action)
    ) ||
    (
      key === 'triggerMechanism' &&
      idea.shape === GunShape.Handgun
    )
  ), [])

  // Toggle a weight
  const toggleWeight = React.useCallback((key: keyof typeof weights) => () => {
    setWeights(w => ({
      ...w,
      [key]: !w[key],
    }))
  }, [setWeights])

  // Generate a gun idea
  const generateIdea = React.useCallback(() => {

    // Logic-agnostic parts
    const triggerMechanism = weights.triggerMechanism
      ? pickPercentileRandom(
        Object.values(TriggerMechanism),
        [
          [TriggerMechanism.Neopup, 2],
          [TriggerMechanism.Bullpup, 15],
        ],
      )
      : pickRandom(Object.values(TriggerMechanism))

    const material = weights.material
      ? pickPercentileRandom(
        Object.values(Material),
        [
          [Material.Gold, 2],
          [Material.Bakelite, 4],
          [Material.BronzedMetal, 8],
        ],
      )
      : pickRandom(Object.values(Material))

    const shape = pickRandom(Object.values(GunShape))
    const optics = pickRandom(Object.values(Optics))

    // Logic disabled
    if (!logicEnabled) {
      setGeneratedIdea({
        optics,
        shape,
        triggerMechanism,
        material,
        action: pickRandom(Object.values(GunAction)),
        caliber: pickRandom(Object.values(Caliber)),
        magazine: pickRandom(Object.values(GunMagazine)),
      })
      return
    }

    // Logic enabled
    const caliber = shape === GunShape.Handgun
      ? pickRandom(PistolCalibers)
      : pickRandom(RifleCalibers)

    const action = shape === GunShape.Handgun
      ? pickRandom(PistolActions)
      : pickRandom(RifleActions)

    const magazine = shape === GunShape.Handgun
      ? pickRandom(PistolMags)
      : pickRandom(RifleMags)

    setGeneratedIdea({
      action,
      caliber,
      magazine,
      shape,
      optics,
      material,
      triggerMechanism,
    })
  }, [logicEnabled, weights, setGeneratedIdea])
  
  const partsList = React.useMemo(() => (
    generatedIdea && Object.entries(generatedIdea)
      .map(([key, value]) => [
        key as keyof GeneratedIdea,
        value,
      ] as const)
      .filter(filterPart(generatedIdea))
  ), [generatedIdea])

  const weightsList = React.useMemo(() => (
    Object.entries(weights)
      .map(([key, value]) => [
        key as keyof typeof weights,
        value,
      ] as const)
  ), [weights])

  return (
    <>
      <Flex.Row css={{ gap: '$1' }}>
        <Checkbox
          label='Enable logic'
          checked={logicEnabled}
          toggle={toggleLogic}
        />
        {weightsList.map(([key, weight]) => (
          <Checkbox
            key={key}
            label={`${titles[key]} weight`}
            checked={weight}
            toggle={toggleWeight(key)}
          />
        ))}
        <Button onClick={generateIdea}>Generate an idea</Button>
      </Flex.Row>
      {partsList && (
        <Flex.Row css={{ gap: '$1' }}>
          {partsList.map(([key, value]) => (
            <Styled.PartCard key={key}>
              <Styled.PartTitle>
                {titles[key as keyof GeneratedIdea]}
              </Styled.PartTitle>
              <Styled.PartValue>{value}</Styled.PartValue>
            </Styled.PartCard>
          ))}
        </Flex.Row>
      )}
    </>
  )
}
