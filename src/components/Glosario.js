import { Row, Container, Circulo, Columna, Categoria, AAA, RowMini} from "./style";

const Glosario = (data) => {
    function validarCantidad(cant) {
        if (cant === 0) {
            return <p>No Resources</p>
        }
        else if (cant > 0) {
            return <p>{cant} Resources</p>
        }
    }

    return (
        <Row>
            {data.data.map((item, index) => {
                return (
                    <>
                    <Container key={index}>
                        <Circulo color={item.color}/>
                        <Columna>
                            <Categoria>{item.categoria}</Categoria> {validarCantidad(item.cantidad)}
                        </Columna>
                    </Container>
                    </>
                )
            })}
        </Row>
    );
}
 
export default Glosario;