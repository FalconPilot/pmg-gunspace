import * as React from 'react'

import { Checkbox, Flex, Headings } from '@gunspace/components'
import { Button } from '@gunspace/components/Button'
import { pickRandom } from '@gunspace/utils'

import {
  Caliber,
  GunAction,
  GunMagazine,
  GunShape,
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
  action: GunAction,
  caliber: Caliber,
  magazine: GunMagazine,
  optics: Optics,
  shape: GunShape,
}

const titles: { [k in keyof GeneratedIdea]: string } = {
  action: 'Action',
  caliber: 'Caliber',
  magazine: 'Ammo feeding',
  optics: 'Aiming',
  shape: 'Gun type',
}

export const IdeasView: React.FC = () => {
  const [isRestrained, setRestrained] = React.useState(true)
  const [generatedIdea, setGeneratedIdea] = React.useState<GeneratedIdea | null>(null)

  const toggleLogic = React.useCallback(() => {
    setRestrained(restrained => !restrained)
  }, [setRestrained])

  const generateIdea = React.useCallback(() => {
    // Logic disabled
    if (!isRestrained) {
      setGeneratedIdea({
        action: pickRandom(Object.values(GunAction)),
        caliber: pickRandom(Object.values(Caliber)),
        magazine: pickRandom(Object.values(GunMagazine)),
        optics: pickRandom(Object.values(Optics)),
        shape: pickRandom(Object.values(GunShape)),
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
      optics: pickRandom(Object.values(Optics)),
      shape,
    })
  }, [isRestrained, setGeneratedIdea])
  
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
      .sort(([k1], [k2]) => titles[k1] > titles[k2] ? 1 : -1)
  ), [generatedIdea])

  return (
    <Flex.Col center css={{ gap: '$1' }}>
      <Headings.H1>Gun Ideas Generator</Headings.H1>
      <Flex.Row css={{ gap: '$1' }}>
        <Checkbox
          label='Enable logic'
          checked={isRestrained}
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
    </Flex.Col>
  )
}
