import { BoxButton } from "./styles"

interface IButton {
    back: string;
    next: string;
    pagination: number;
    backPagination: React.MouseEventHandler<HTMLButtonElement>
    nextPagination: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: IButton) => {
    return (
        <BoxButton>
            <button onClick={props.backPagination}><i className="fas fa-caret-left"></i></button>
            <p>Pagina {props.pagination} de 10</p>
            <button onClick={props.nextPagination}><i className="fas fa-caret-right"></i></button>
        </BoxButton>
    )
}