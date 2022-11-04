import { Row, Container, Circulo, Columna, Categoria, CANT, RowMini, Resources} from "./style";

const Glosario = (data) => {
    function validarCantidad(cant) {
        if (cant === 0) {
            return <Resources>No Resources</Resources>
        }
        else if (cant > 0) {
            return <RowMini><CANT> {cant} </CANT> <Resources> Resources </Resources></RowMini>
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