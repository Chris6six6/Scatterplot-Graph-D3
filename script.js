// URL del archivo JSON que contiene los datos
const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json'

// Cargar los datos JSON desde la URL y llamar a la función init cuando estén listos
d3.json(url).then(data => init(data));

// Función init que se ejecuta cuando los datos se cargan correctamente
function init(data) {
    // Definir dimensiones y márgenes del gráfico
    const height = 750;
    const width = 1200;
    const padding = 60;

    // Crear el elemento SVG donde se dibujará el gráfico
    const svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Crear escalas para los ejes x e y
    const x = d3.scaleLinear().range([padding, width - padding]);
    const y = d3.scaleTime().range([height - padding, padding]);

    // Extraer los datos y metadatos del archivo JSON
    const json = data;
    // Obtener los mínimos y máximos de los datos para establecer los dominios de las escalas
    const minYear = d3.min(json, d => d.Year);
    const maxYear = d3.max(json, d => d.Year);
    const minTime = d3.min(json, d => new Date(d.Seconds * 1000));
    const maxTime = d3.max(json, d => new Date(d.Seconds * 1000));



    // Establecer los dominios de las escalas
    x.domain([minYear - 1, maxYear + 1]);
    y.domain([maxTime, minTime]);

    // Crear ejes x e y
    const xAxis = d3.axisBottom(x).tickFormat(d3.format('d'));
    const yAxis = d3.axisLeft(y).tickFormat(d3.timeFormat("%M:%S")); // Formato de las etiquetas del eje y

    // Agregar los ejes al SVG
    svg.append("g")
        .attr("id", "x-axis")
        .attr("transform", "translate(0," + (height - padding) + ")")
        .call(xAxis)
        .style("font-size", "15px");

    svg.append("g")
        .attr("id", "y-axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis)
        .style("font-size", "15px");

    // Crear puntos para representar los datos en el SVG
// Establece el evento mouseover en cada círculo
svg.selectAll("circle")
    .data(json)
    .enter()
    .append("circle")
    .attr("r", 5) // Radio del círculo
    .attr("class", "dot")
    .attr("cx", (d) => x(d.Year)) // Posición en el eje x
    .attr("cy", (d) => y(new Date(d.Seconds * 1000))) // Posición en el eje y
    .attr('data-xvalue', (d) => d.Year) // Establece el valor x para el tooltip
    .attr('data-yvalue', (d) => new Date(d.Seconds * 1000)) // Establece el valor y para el tooltip
    .attr("fill", (d) => d.Doping ? "orange" : "steelblue") // Color de relleno del círculo
    .on('mouseover', function (event, d) {
        // Cuando se activa el evento mouseover, se muestra el tooltip
        tooltip.transition()
            .duration(200) // Duración de la transición
            .style('opacity', 0.9) // Hace visible el tooltip
            .attr('data-year', d.Year);
        // Establece el contenido del tooltip
        tooltip.html(`${d.Name}: ${d.Nationality}<br/> 
            Year: ${d.Year}, Time: ${(d.Time)}<br/> <br/> 
            ${d.Doping? d.Doping : ''}
        `)
        .style('left', (event.pageX + 10) + 'px') // Posiciona el tooltip horizontalmente
        .style('top', (event.pageY + 10) + 'px') // Posiciona el tooltip verticalmente
        .style("background-color", d.Doping ? "orange" : "steelblue")
        
    })
    .on('mouseout', function (d) {
        // Cuando se activa el evento mouseout, se oculta el tooltip
        tooltip.transition()
            .duration(100) // Duración de la transición
            .style('opacity', 0); // Oculta el tooltip
    });

// Crea el tooltip
const tooltip = d3.select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("opacity", 0) // Establece la opacidad inicial del tooltip
    .style("position", "absolute")
    .style("background-color", "steelblue") // Color de fondo del tooltip
    .style("color", "#fff") // Color del texto del tooltip
    .style("padding", "10px") // Añade un relleno al tooltip
    .style("font-size", "15px") // Establece el tamaño de fuente del tooltip
    .style("text-align", "left"); // Alinea el texto a la izquierda


    // Leyend data
    var legendData = ["Riders with doping allegations", "No doping allegations"];
    var legendContainer = svg.append('g').attr('id', 'legend').style("fill", "white");;

    var legend = legendContainer
    .selectAll('.legend-label')
    .data(legendData)
    .enter()
    .append('g')
    .attr('class', 'legend-label')
    .attr('transform', function(d, i) {return 'translate(950,' + (height - 650 + i * 25) + ')';})
    
    legend
    .append('rect')
    .attr('x', -10)
    .attr('width', 18)
    .attr('height', 18)
    .style('fill', (d, i) => i === 0 ? 'orange' : 'steelblue'); // Cambia el color según el índice
    
    legend
    .append('text')
    .attr('x', 15)
    .attr('y', 9)
    .attr('dy', '.35em')
    .style('text-anchor', 'start')
    .text(function(d) {return d;})
    
}