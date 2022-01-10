import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { RecipeCardContainer, RecipeCardContent } from './StyledHome'
import React from "react"
import { InputsContainer } from "../signupPage/StyledSignup"
import TextField from "@material-ui/core/TextField"

const HomePage = () => {
    return (
        <div>

            <InputsContainer>
                <TextField
                    name={"nome"}
                    value={"🔎"}
                    onChange={null}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                />
            </InputsContainer>

            <RecipeCardContainer >
                <CardActionArea>
                    <CardMedia
                        component={'img'}
                        alt={"Hamburguer"}
                        height={'150px'}
                        image={"image"}
                    />
                    <RecipeCardContent>
                        {"Alimento"}
                        <Typography align={'center'}>
                        </Typography>
                    </RecipeCardContent>
                </CardActionArea>
            </RecipeCardContainer>




        </div>
    )
}
export default HomePage