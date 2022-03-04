import { BoxButton } from "./styles"

export const Button = (props: any) => {
    return (
        <BoxButton>
            <button onClick={props.backPagination}><i className="fas fa-caret-left"></i></button>
            <p>Pagina {props.pagination} de 10</p>
            <button onClick={props.nextPagination}><i className="fas fa-caret-right"></i></button>
        </BoxButton>
    )
}