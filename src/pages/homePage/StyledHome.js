import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export const InputsContainer = styled.div`

display: grid;
flex-direction: colum;
align-item: center;
padding: 20px;
`
export const Texto = styled.div`
text-align: center;
padding: 20px;

`
export const RecipeCardContainer = styled(Card)`
  width: 250px;
  margin: 10px
`
export const RecipeCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`