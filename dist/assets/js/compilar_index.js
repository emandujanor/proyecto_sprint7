var template=Handlebars.js['plantilla_index'];
var data={
    articulos=[
      {
      titulo:"Titulo1",
      parrafo:"parrafo1"
    },
    {
      titulo:"Titulo1",
      texto:"parrafo1"
    },
    {
      titulo:"Titulo2",
      texto:"parrafo2"
    },
    {
      titulo:"Titulo3",
      texto:"parrafo3"
    };
document.getElementById('articulos').innerHTML+=template(data);
