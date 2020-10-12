import React, { Component, useState } from 'react';
import Card from './CardUI';
import data from '../constants';
import Footer from '../Footer';

import img1 from '../assents/cocina.png';
import img2 from '../assents/excel.png';
import img3 from '../assents/word.png';
import img4 from '../assents/filmora.png';
import img5 from '../assents/guitarra.png';
import img6 from '../assents/haking_etico.png';
import img7 from '../assents/Html.png';
import img8 from '../assents/Ingles.png';
import img9 from '../assents/italiano.png';
import img10 from '../assents/java_script.png';
import img11 from '../assents/literatura.png';
import img12 from '../assents/mecanica.png';
import img13 from '../assents/Payton.png';
import img14 from '../assents/Photoshop.png';
import img15 from '../assents/piano.png';
import img16 from '../assents/power point.png';
import img17 from '../assents/primeros_auxilios.png';
import img18 from '../assents/pseint.png';
import img19 from '../assents/Ruby.png';
import img20 from '../assents/seguridad_informatica.png';
import img21 from '../assents/dibujos.png';
import img22 from '../assents/tecnico.png';
import img23 from '../assents/historia de la programacion.png'
import img24 from '../assents/google.png'


class Cards extends Component {


    constructor( props ) {
        super( props );
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind( this );
    }

    handleChange = event => {
        this.setState( { value: event.target.value } );
    };


    render() {
        return (
            <>

                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Busca tu cursos faborito</a>

                </nav>
                <div className="col-12 p-4">
                    <input className="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Buscar" id />


                </div>
                <div className="col-12">
                    <div className="row">
                        {
                            data.filter( data => data.title.toLocaleLowerCase().includes( this.state.value ) ).map( d => (
                                <div className='col-12 col-12 col-md-6 col-lg-4 p-4'>

                                    <Card imgsrc={d.img === 'img1' ? img1 : img2 && d.img === 'img2' ? img2 : img3 && d.img === 'img3' ? img3 : img4
                                        && d.img === 'img4' ? img4 : img5 && d.img === 'img5' ? img5 : img6
                                            && d.img === 'img6' ? img6 : img7 && d.img === 'img7' ? img7 : img8
                                                && d.img === 'img8' ? img8 : img9 && d.img === 'img9' ? img9 : img10
                                                    && d.img === 'img10' ? img10 : img11 && d.img === 'img11' ? img11 : img12
                                                        && d.img === 'img12' ? img12 : img13 && d.img === 'img13' ? img13 : img14
                                                            && d.img === 'img14' ? img14 : img15 && d.img === 'img15' ? img15 : img16
                                                                && d.img === 'img16' ? img16 : img17 && d.img === 'img17' ? img17 : img18
                                                                    && d.img === 'img18' ? img18 : img19 && d.img === 'img19' ? img19 : img20
                                                                        && d.img === 'img20' ? img20 : img21 && d.img === 'img21' ? img21 : img22
                                                                            && d.img === 'img22' ? img22 : img23 && d.img === 'img23' ? img23 : img24
                                                                                && d.img === 'img24' ? img24 : img24
                                    } title={d.title}

                                        text={d.text}
                                        url={d.url}

                                    />

                                </div>


                            ) )
                        }
                        <div>

                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </>
        );
    }
}
export default Cards;