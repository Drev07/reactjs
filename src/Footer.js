
import React from 'react';
import './Footer-estilo.css';


const Footer = () => {

    return (
        <div class="main-footer">
            <div className="container">
                <div className="row">
                    {/* columana1 */}
                    <div className="col">
                        <h4>

                        </h4>
                        <ul className="list-unstyled">
                            <li>
                                Este poryecto consiste en facilitar la busquedas de cursos,
                                mostranado asi una libreria de cursos de youtube
                                donde aprenderemos muchas cosas nuevas.
                             </li>
                            <li>
                                Hasta en este momento no contamos con muchos cursos, pero en un futuro
                                cercano incorporare mas cursos.
                             </li>
                        </ul>

                    </div>
                    {/* columna2 */}
                    <div className="col">
                        <h4>

                        </h4>
                        <ul className="list-unstyled">
                            <li>
                                Gracias a la oportunidad que me a brindado
                                mi centro educatico y sus docentes, pude desempeñarme
                                en aprender mas sobre creacion y implementacion de páginas web,
                                este proyecto lo cree en el año 2020, ya que lapandemia ocurrida en este preciso año
                                nos nos dejo realizar practicas prenceciales. Fue a si que los docentes
                                del establecimiento optaron por dejarnos un poryecto de practicas supervisadas
                                fonde cada estuidente realizamos y investigamos diferentes tema sobre el area
                                de bachillerato.
                            </li>
                        </ul>

                    </div>
                    {/* columana3 */}
                    <div className="col">
                        <h4>contacta mi establecimiento </h4>
                        <ul className="list-unstyled">
                            <li>
                                <div className="btn btn-outline-success ">
                                    <a href="https://www.facebook.com/PaginaCenseChapas" target="_btn " rel="nooper noreferre ">contacata mi establecimiento</a>
                                </div>

                            </li>

                        </ul>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Practicas supervisadas
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Footer;

