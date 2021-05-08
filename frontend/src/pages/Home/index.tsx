import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                    <Link className="btn btn-primary btn-large" to="/dashboard">
                        Acessar Dashboard!
                    </Link>
                    <a className="btn btn-large btn-primary ml-3" href="https://github.com/victorh5/projeto-sds3">Repositório</a>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;