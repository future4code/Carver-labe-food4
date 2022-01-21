import styled from "styled-components"

export const StyledCart = styled.div`
    width: 328px;
    display: flex;
    flex-direction: column;
    margin: auto;


`





export const StyledProductsCard = styled.div`
    display: flex;
    width: 328px;
    height: 120px;
    margin: 9px 0 12px;
    border: solid 1px var(--segundary);
    border-radius: 8px;



    img{
        width: 98px;
        height: 120px;
        margin: 0 0 12px;
        border-radius: 8px 0 0 8px;
    }

    .card-content{
        width: 230px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-between;

        .card-content-top{
            display: flex;
            width: 230px;
            margin-left: 16px;
            
            .card-content-texts{
                display: flex;
                flex-direction: column;
                width: 184px;
                p{
                    display: inline;
                    margin: 0;
                }

                .card-content-texts-title{
                        margin-top: 18px;
                        margin-bottom: 6px;
                        color: var(--primary);
                    }
                    .card-content-texts-description{
                        font-size: 14px;
                        color: var(--segundary);
                        color: gray;
                    }
            }

            .card-content-marker{
                display: flex;
                width: 30px;
                height: 30px;
                justify-content: end;

                button{
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    border: 1px solid var(--primary);
                    border-radius: 0 8px 0 8px;
                    color: var(--primary);
                }
            }
        }


        .card-content-bottom{
            display: flex;
            justify-content: space-between;
            margin-left: 16px;

            p{
                display: inline;
                margin: 0
            }

            .card-content-cart{
                button{
                    width: 100px;
                    height: 30px;
                    background: transparent;
                }

                .card-button-add{
                        border: 1px solid var(--darker);
                        border-radius: 8px 0 8px 0;
                        }

                    .card-button-remove{
                            border: 1px solid var(--details);
                            border-radius: 8px 0 8px 0;
                            color: var(--details);
                            }
            }

        }
    }
`