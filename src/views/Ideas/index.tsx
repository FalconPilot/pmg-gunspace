import * as React from 'react'

import { Checkbox, Flex } from '@gunspace/components'
import { Button } from '@gunspace/components/Button'
import { pickRandom } from '@gunspace/utils'

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
  RifleMags
} from '@gunspace/types'

import * as Styled from './styled'

type GeneratedIdea = {
  caliber: Caliber,
  magazine: GunMagazine,
  action: GunAction,
  shape: GunShape,
  optics: Optics,
  material: Material,
}

const titles: { [k in keyof GeneratedIdea]: string } = {
  action: 'Action',
  caliber: 'Caliber',
  magazine: 'Ammo Feeding',
  optics: 'Aiming',
  shape: 'Gun Type',
  material: 'Main material',
}

export const IdeasView: React.FC = () => {
  const [logicEnabled, setLogic] = React.useState(true)
  const [generatedIdea, setGeneratedIdea] = React.useState<GeneratedIdea | null>(null)

  const toggleLogic = React.useCallback(() => {
    setLogic(status => !status)
  }, [logicEnabled])

  const generateIdea = React.useCallback(() => {
    // Logic disabled
    if (!logicEnabled) {
      setGeneratedIdea({
        action: pickRandom(Object.values(GunAction)),
        caliber: pickRandom(Object.values(Caliber)),
        magazine: pickRandom(Object.values(GunMagazine)),
        optics: pickRandom(Object.values(Optics)),
        shape: pickRandom(Object.values(GunShape)),
        material: pickRandom(Object.values(Material))
      })
      return
    }

    // Logic enabled
    const shape = pickRandom(Object.values(GunShape))

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
      optics: pickRandom(Object.values(Optics)),
      material: pickRandom(Object.values(Material)),
    })
  }, [logicEnabled, setGeneratedIdea])
  
  const partsList = React.useMemo(() => (
    generatedIdea && Object.entries(generatedIdea)
      .map(([key, value]) => [
        key as keyof GeneratedIdea,
        value
      ] as const)
      .filter(([key]) => !(
        ([
          'magazine',
        ].includes(key) && [
          GunAction.Revolving,
          GunAction.SingleShot,
        ].includes(generatedIdea.action))
      ))
  ), [generatedIdea])

  return (
    <>
      <Flex.Row css={{ gap: '$1' }}>
        <Checkbox
          label='Enable logic'
          checked={logicEnabled}
          toggle={toggleLogic}
        />
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
