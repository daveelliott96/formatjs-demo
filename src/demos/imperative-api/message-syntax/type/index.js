import { Container } from '../../../../components/demo-containers'
import SelectTypeDemo from './select-type'
import PluralisationDemo from './pluralisation-type'
import Notice from '../../../../components/notice'

const TypeDemo = () => {
  return (
    <Container>
      <Notice>Moving onto the second part of the message syntax: type. There are lots of different types of message you can set, such as number, date, time, select, plural, selectOrdinal etc. For this demo we'll focus on some of the cooler types: select and plural</Notice>
      <SelectTypeDemo/>
      <PluralisationDemo/>
    </Container>
  )
}

export default TypeDemo
