import app from './app.js'
import "./libs/initialApp.js"; // aqui se inicializan valores predeterminados

app.set('port', process.env.PORT || 3000 ); // configuracion del puerto


app.listen(app.get('port'), () => {
    console.log('Servidor OK...',app.get('port'))
})  