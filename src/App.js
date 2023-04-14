import './App.css';

function App() {
  return (
    <div>
      <div className="part-1 position-relative">
        <img className="bg-800 w-100" src="src/img/сверху.png" alt="" />
        <header className="z-index-1">
          <div className="container text-center col-12 col-md-8">
            <div className="row pt-4">
              <div className="row col col-xl-4">
                <div className="col align-self-center">
                  <a className="text-dark" href="index.html">
                    Главная
                  </a>
                  <img className="visible" src="src/img/подчеркивание.png" alt=""/>
                </div>
                <div className="col align-self-center">
                  <a className="text-dark" href="public/index.html" >
                    Товары
                  </a>
                  <img className="invisible" src="src/img/подчеркивание.png" alt=""/>
                </div>
                <div className="col align-self-center">
                  <a className="text-dark " href="public/index.html" >
                    Контакты
                  </a>
                  <img className="invisible" src="src/img/подчеркивание.png" alt=""/>
                </div>
              </div>
              <div className="col-sm col-xl-4 align-self-start">
                <img className="col-6 col-lg-5 m-3" src="src/img/Слой20.png" alt=""/>
              </div>
              <div className="row col col-xl-4">
                <div className="col text-center align-self-center">
                  +7 727 368 83 56
                </div>
                <div className="col text-center align-self-center">
                  +7 771 964 36 50
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container mt-4 pb-5 bt-mb col-lg-5">
          <div className="row">
            <div className=""></div>
            <div className=" text-center">
              <div className="d-flex flex-column justify-content-center">
                <div className="h3 text-center">Строительство Бассейнов</div>
                <p><b> Полный спектр работ:</b> от проектирование и сдачи "под ключ до обслуживание или реконструкции вашего бассейна, а также большой выбор товаров</p>
                <div>
                  <button type="button" className=" btn-custom btn-red text-center col-md-5 col-8">Оставить заявку</button>
                </div>
            </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
        <div className="container">
          <div className="text-center">
            <div className="h3">
              Наши работы
            </div>
            <img src="src/img/подчеркивание.png" alt=""/>
          </div>
        </div>
      <div className="container">
        <div id="carouselExampleControls" className="carousel slide pt-3" data-ride="carousel">
          <div className="carousel-inner">
            <div className="container carousel-item active">
              <div className="row">
                <div className="col">
                  <img src="src/img/1.png" className="d-block w-100 h-100" alt="..."/>
                </div>
                <div className="col-6">
                  <img src="src/img/2.png" className="d-block w-100 h-100" alt="..."/>
                </div>
                <div className="col">
                  <img src="src/img/3.png" className="d-block w-100 h-100" alt="..."/>
                </div>
              </div>
            </div>
            <div className="container carousel-item">
              <div className="row">
                <div className="col">
                  <img src="src/img/1.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="col-6">
                  <img src="src/img/2.png" className="d-block w-100 h-100" alt="..."/>
                </div>
                <div className="col">
                  <img src="src/img/3.png" className="d-block w-100 " alt="..."/>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div className="carousel-control-container">
            <a className="carousel-control-prev arrow-left" href="#carouselExampleControls" role="button" data-slide="prev">
              <img className="align-self-end btn-size text-light" src="src/img/стрелки.png" alt="Previous" width="40" height="40"/>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next arrow-right" href="#carouselExampleControls" role="button" data-slide="next">
              <img className="align-self-end btn-size" src="src/img/стрелкиправая.png" alt="Next" width="40" height="40"/>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>  
      </div>
      <br/>
      <div className="mt-5 position-relative">
        <img className="position-absolute h-100 w-100 bg"  src="src/img/Фигура216.png" title="bg" alt=""/>
          <div className="mt-5 text-center z-index-1">
            <br/>
            <br/>
            <div className="h4 z-index-2">СКОЛЬКО БУДЕТ СТОИТЬ БАССЕЙН?</div>
            <img src="src/img/подчеркивание.png" alt=""/>
            <div>Ответьте на несколько вопросов и наши специалисты отправят вам смету в течении <b>1 дня</b></div>
          </div>
          <br/>
        <div className="container">
          <div className="container row">
            <div className="align-content-center col-12 pb-4 col-md-6">
              <img className="position-absolute h-100 w-100" src="src/img/подложка.png" alt="" />
              <br/>
              <div className="container">
                <form className="form ml-4">
                  <div className="form-group row">
                    <label className="col-sm-4" nameFor="exampleFormCOntrolSelect1">Отделка чаши: </label>
                    <select className="form-control col-sm-8" id="exampleFormControlSelect1" title="exampleFormControlSelect1">
                      <option>Полипропилен</option>
                      <option>Плитка</option>
                      <option>Железо</option>
                    </select>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-4" nameFor="exampleFormCOntrolSelect2">Нагрев воды: </label>
                    <select className="form-control col-sm-8" id="exampleFormControlSelect2" title="exampleFormControlSelect2">
                      <option>Нет</option>
                      <option>Да</option>
                    </select>
                  </div>
                  <div className="form-range rounded-circle row">
                    <label className="col-sm-4" nameFor="form-control-range">Размер Бассейна</label>
                    <input className="form-control-range col-sm-6" title="form-control" type="range" min="0" max="5" value="" id="form-range" step="1"/>
                    <span className="col-sm-2" id="output"></span>
                  </div>
                  <button className="btn-custom btn-red col text-center" type="submit">Оставить заявку</button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <img className="w-100 text-center" src="src/img/картинкаслитая.png" alt=""/>
            </div>
          </div>
        </div>
        <br/>
        <br/>
      </div>
      <div className="container text-center mt-3">
        <div className="h4 text-center">Товары для бассейна</div>
        <img src="src/img/подчеркивание.png" alt=""/>
        <div className="text-center">
          <a className="h6 col-4 text-danger" href="public/index.html">Все</a>
          <a className="h6 col-4" href="public/index.html">Насосы</a>
          <a className="h6 col-4" href="public/index.html">Нагреватели</a>
        </div>
        <div className="container">
          <div id="carouselExampleControls1" className="carousel slide pt-3" data-ride="carousel">
            <div className="carousel-inner position-relative">
              <div className="container carousel-item active">
                <div className="row">
                  <div className="col">
                    <img src="src/img/12.png" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="col">
                    <img src="src/img/21.png" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="col">
                    <img src="src/img/31.png" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="col">
                    <img src="src/img/41.png" className="d-block w-100" alt="..."/>
                  </div>
                </div>
              </div>
              <div className="container carousel-item">
                <div className="row">
                  <div className="col">
                    <img src="src/img/12.png" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="col">
                    <img src="src/img/21.png" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="col">
                    <img src="src/img/31.png" className="d-block w-100 " alt="..."/>
                  </div>
                  <div className="col">
                    <img src="src/img/41.png" className="d-block w-100 " alt="..."/>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-control-container">
              <a className="carousel-control-prev arrow-left2" href="#carouselExampleControls1" role="button" data-slide="prev">
                <img src="src/img/стрелки.png" alt="Previous" width="40" height="40"/>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next arrow-right2" href="#carouselExampleControls1" role="button" data-slide="next">
                <img src="src/img/стрелкиправая.png" alt="Next" width="40" height="40"/>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <br/>
          <div>
            <button className="btn-custom btn-blue col col-sm-6 text-center" type="submit">Смотреть все</button>
          </div>
        </div>
      </div>
      <br/>
      <div className="position-relative">
        <img className="position-absolute h-100 w-100 bg" src="src/img/Фигура272.png" alt=""/>
        <div className="container position-absolute z-index-0 col-12">
          <img className="col-4 col-sm-3 float-right" src="src/img/листья.png" alt=""/>
        </div>
        <br/>
        <br/>
        <div>
          <div className="h4 text-center text-white">Что вы получаете?</div>
          <div className="text-center">
            <img src="src/img/волнистая.png" alt=""/>
          </div>
          <br/>
          <div className="container col-12 col-sm-8 mb-5">
            <div className="row text-white">
              <div className="d-flex flex-column col-2 col-sm-2">
                <img className="w-100" src="src/img/research.png" alt=""/>
                <div className="">Индивидуальное предложение</div>
              </div>
              <div className="col-2 col-sm-3 "></div>
              <div className="d-flex flex-column col-2 col-sm-2">
                <img className="w-100" src="src/img/time.png" alt=""/>
                <div className="text-md">Комплексная поддержка</div>
              </div>
              <div className="col-2 col-sm-3"></div>
              <div className="d-flex flex-column col-2 col-sm-2">
                <img className="w-100" src="src/img/hand.png" alt=""/>
                <div>Качественные материалы</div>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="container text-center col-11  col-md-4 col-xl-3">
            <div className="bg-kick p-3 mt-5 rounded">
              <div className="h4">Остались вопросы?</div>
              <img src="src/img/подчеркивание.png" alt=""/>
              <div className="h6">Оставьте заявку и наши специалисты свяжутся с вами в ближайшее время</div>
              <form className="d-flex flex-column">
                <input className="form-control" type="text" placeholder="Имя"/>
                <br/>
                <input className="form-control" type="text" placeholder="Телефон"/>
                <br/>
                <button type="button" className="btn-custom btn-red">Отправить</button>
              </form>
            </div>
          </div>
        </div>
        <br/>
      </div>
      <div className="position-relative">
        <img className="bg-2 position-absolute w-100 h-100 " src="src/img/map1.png" alt=""/>
        <br/>
        <div className="container row h-100">
          <div className="col-1 col-sm-2"></div>
          <div className="col-10 col-sm-5 position-relative">
            <img className="position-absolute bg h-100 w-100" src="src/img/подложка.png" alt=""/>
            <br/>
            <div className="row">
              <div className="col-1"></div>
              <div className="h5 font-weight-bold col-10">Контакты</div>
              <div className="col-1"></div>
            </div>
            <br/>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10 row">
                <div><img  src="src/img/map.png" alt=""/>Казахстан, Алматы, Байзакова, 263, 1 этаж, 5 офис</div>
              </div>
              <div className="col-1"></div>
            </div>
            <br/>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10 row">
                <img src="src/img/telephone.png" alt=""/>
                <div className="font-weight-bold"> +7 727 368 83 56, +7 771 964 36 50</div>
              </div>
              <div className="col-1"></div>
            </div>
            <br/>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10 row">
                <img src="src/img/@.png" alt=""/>
                <div>imfo@pool.kz</div>
              </div>
              <div className="col1"></div>
            </div>
            <br/>
          </div>
          <div className="col-5"></div>
        </div>
        <br/>
      </div>
    </div>
  );
}

export default App;
