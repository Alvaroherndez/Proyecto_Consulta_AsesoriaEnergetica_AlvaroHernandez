document.addEventListener("DOMContentLoaded", function() {
    const data = [
        { "Centro": "Humanes", "Grado": "DAM", "Sexo": "M", "Edad": 22, "Pregunta_1": 4, "Pregunta_2": 5, "Pregunta_3": 3, "Pregunta_4": 2, "Pregunta_5": 1 },
        { "Centro": "Getafe", "Grado": "DAW", "Sexo": "F", "Edad": 20, "Pregunta_1": 3, "Pregunta_2": 4, "Pregunta_3": 4, "Pregunta_4": 3, "Pregunta_5": 2 },
        { "Centro": "Humanes", "Grado": "ASIR", "Sexo": "M", "Edad": 23, "Pregunta_1": 5, "Pregunta_2": 5, "Pregunta_3": 5, "Pregunta_4": 4, "Pregunta_5": 5 },
        { "Centro": "Getafe", "Grado": "SMR", "Sexo": "F", "Edad": 21, "Pregunta_1": 2, "Pregunta_2": 3, "Pregunta_3": 4, "Pregunta_4": 4, "Pregunta_5": 3 },
        { "Centro": "Humanes", "Grado": "DAM", "Sexo": "M", "Edad": 24, "Pregunta_1": 4, "Pregunta_2": 4, "Pregunta_3": 3, "Pregunta_4": 3, "Pregunta_5": 4 },
        { "Centro": "Getafe", "Grado": "DAW", "Sexo": "F", "Edad": 22, "Pregunta_1": 5, "Pregunta_2": 4, "Pregunta_3": 5, "Pregunta_4": 3, "Pregunta_5": 3 },
        { "Centro": "Humanes", "Grado": "ASIR", "Sexo": "M", "Edad": 20, "Pregunta_1": 3, "Pregunta_2": 3, "Pregunta_3": 2, "Pregunta_4": 4, "Pregunta_5": 4 },
        { "Centro": "Getafe", "Grado": "SMR", "Sexo": "F", "Edad": 25, "Pregunta_1": 4, "Pregunta_2": 5, "Pregunta_3": 5, "Pregunta_4": 5, "Pregunta_5": 5 },
        { "Centro": "Humanes", "Grado": "DAM", "Sexo": "M", "Edad": 21, "Pregunta_1": 4, "Pregunta_2": 3, "Pregunta_3": 4, "Pregunta_4": 4, "Pregunta_5": 4 },
        { "Centro": "Getafe", "Grado": "DAW", "Sexo": "F", "Edad": 23, "Pregunta_1": 5, "Pregunta_2": 4, "Pregunta_3": 3, "Pregunta_4": 2, "Pregunta_5": 1 },
        { "Centro": "Humanes", "Grado": "ASIR", "Sexo": "M", "Edad": 22, "Pregunta_1": 3, "Pregunta_2": 5, "Pregunta_3": 4, "Pregunta_4": 4, "Pregunta_5": 3 },
        { "Centro": "Getafe", "Grado": "SMR", "Sexo": "F", "Edad": 20, "Pregunta_1": 4, "Pregunta_2": 4, "Pregunta_3": 5, "Pregunta_4": 3, "Pregunta_5": 2 },
        { "Centro": "Humanes", "Grado": "DAM", "Sexo": "M", "Edad": 24, "Pregunta_1": 5, "Pregunta_2": 5, "Pregunta_3": 4, "Pregunta_4": 4, "Pregunta_5": 5 },
        { "Centro": "Getafe", "Grado": "DAW", "Sexo": "F", "Edad": 21, "Pregunta_1": 3, "Pregunta_2": 3, "Pregunta_3": 4, "Pregunta_4": 5, "Pregunta_5": 4 },
        { "Centro": "Humanes", "Grado": "ASIR", "Sexo": "M", "Edad": 25, "Pregunta_1": 4, "Pregunta_2": 4, "Pregunta_3": 3, "Pregunta_4": 3, "Pregunta_5": 4 },
        { "Centro": "Getafe", "Grado": "SMR", "Sexo": "F", "Edad": 22, "Pregunta_1": 5, "Pregunta_2": 4, "Pregunta_3": 5, "Pregunta_4": 3, "Pregunta_5": 3 },
        { "Centro": "Humanes", "Grado": "DAM", "Sexo": "M", "Edad": 20, "Pregunta_1": 3, "Pregunta_2": 5, "Pregunta_3": 4, "Pregunta_4": 4, "Pregunta_5": 3 },
        { "Centro": "Getafe", "Grado": "DAW", "Sexo": "F", "Edad": 24, "Pregunta_1": 4, "Pregunta_2": 4, "Pregunta_3": 3, "Pregunta_4": 3, "Pregunta_5": 4 },
        { "Centro": "Humanes", "Grado": "ASIR", "Sexo": "M", "Edad": 21, "Pregunta_1": 5, "Pregunta_2": 4, "Pregunta_3": 5, "Pregunta_4": 3, "Pregunta_5": 3 },
        { "Centro": "Getafe", "Grado": "SMR", "Sexo": "F", "Edad": 23, "Pregunta_1": 3, "Pregunta_2": 3, "Pregunta_3": 2, "Pregunta_4": 4, "Pregunta_5": 4 },
        { "Centro": "Humanes", "Grado": "DAM", "Sexo": "M", "Edad": 22, "Pregunta_1": 4, "Pregunta_2": 5, "Pregunta_3": 3, "Pregunta_4": 2, "Pregunta_5": 1 },
        { "Centro": "Getafe", "Grado": "DAW", "Sexo": "F", "Edad": 20, "Pregunta_1": 3, "Pregunta_2": 4, "Pregunta_3": 4, "Pregunta_4": 3, "Pregunta_5": 2 },
        { "Centro": "Humanes", "Grado": "ASIR", "Sexo": "M", "Edad": 23, "Pregunta_1": 5, "Pregunta_2": 5, "Pregunta_3": 5, "Pregunta_4": 4, "Pregunta_5": 5 },
        { "Centro": "Getafe", "Grado": "SMR", "Sexo": "F", "Edad": 21, "Pregunta_1": 2, "Pregunta_2": 3, "Pregunta_3": 4, "Pregunta_4": 4, "Pregunta_5": 3 },
        { "Centro": "Humanes", "Grado": "DAM", "Sexo": "M", "Edad": 24, "Pregunta_1": 4, "Pregunta_2": 4, "Pregunta_3": 3, "Pregunta_4": 3, "Pregunta_5": 4 },
        { "Centro": "Getafe", "Grado": "DAW", "Sexo": "F", "Edad": 22, "Pregunta_1": 5, "Pregunta_2": 4, "Pregunta_3": 5, "Pregunta_4": 3, "Pregunta_5": 3 },
        { "Centro": "Humanes", "Grado": "ASIR", "Sexo": "M", "Edad": 20, "Pregunta_1": 3, "Pregunta_2": 3, "Pregunta_3": 2, "Pregunta_4": 4, "Pregunta_5": 4 },
        { "Centro": "Getafe", "Grado": "SMR", "Sexo": "F", "Edad": 25, "Pregunta_1": 4, "Pregunta_2": 5, "Pregunta_3": 5, "Pregunta_4": 5, "Pregunta_5": 5 },
        { "Centro": "Humanes", "Grado": "DAM", "Sexo": "M", "Edad": 21, "Pregunta_1": 4, "Pregunta_2": 3, "Pregunta_3": 4, "Pregunta_4": 4, "Pregunta_5": 4 },
        { "Centro": "Getafe", "Grado": "DAW", "Sexo": "F", "Edad": 23, "Pregunta_1": 5, "Pregunta_2": 4, "Pregunta_3": 3, "Pregunta_4": 2, "Pregunta_5": 1 },
        { "Centro": "Humanes", "Grado": "ASIR", "Sexo": "M", "Edad": 22, "Pregunta_1": 3, "Pregunta_2": 5, "Pregunta_3": 4, "Pregunta_4": 4, "Pregunta_5": 3 },
        { "Centro": "Getafe", "Grado": "SMR", "Sexo": "F", "Edad": 20, "Pregunta_1": 4, "Pregunta_2": 4, "Pregunta_3": 5, "Pregunta_4": 3, "Pregunta_5": 2 },
        { "Centro": "Humanes", "Grado": "DAM", "Sexo": "M", "Edad": 24, "Pregunta_1": 5, "Pregunta_2": 5, "Pregunta_3": 4, "Pregunta_4": 4, "Pregunta_5": 5 },
        { "Centro": "Getafe", "Grado": "DAW", "Sexo": "F", "Edad": 21, "Pregunta_1": 3, "Pregunta_2": 3, "Pregunta_3": 4, "Pregunta_4": 5, "Pregunta_5": 4 },
        { "Centro": "Humanes", "Grado": "ASIR", "Sexo": "M", "Edad": 25, "Pregunta_1": 4, "Pregunta_2": 4, "Pregunta_3": 3, "Pregunta_4": 3, "Pregunta_5": 4 },
        { "Centro": "Getafe", "Grado": "SMR", "Sexo": "F", "Edad": 22, "Pregunta_1": 5, "Pregunta_2": 4, "Pregunta_3": 5, "Pregunta_4": 3, "Pregunta_5": 3 },
        { "Centro": "Humanes", "Grado": "DAM", "Sexo": "M", "Edad": 20, "Pregunta_1": 3, "Pregunta_2": 5, "Pregunta_3": 4, "Pregunta_4": 4, "Pregunta_5": 3 },
        { "Centro": "Getafe", "Grado": "DAW", "Sexo": "F", "Edad": 24, "Pregunta_1": 4, "Pregunta_2": 4, "Pregunta_3": 3, "Pregunta_4": 3, "Pregunta_5": 4 },
        { "Centro": "Humanes", "Grado": "ASIR", "Sexo": "M", "Edad": 21, "Pregunta_1": 5, "Pregunta_2": 4, "Pregunta_3": 5, "Pregunta_4": 3, "Pregunta_5": 3 },
        { "Centro": "Getafe", "Grado": "SMR", "Sexo": "F", "Edad": 23, "Pregunta_1": 3, "Pregunta_2": 3, "Pregunta_3": 2, "Pregunta_4": 4, "Pregunta_5": 4 }
    ];

    const tableBody = document.querySelector("#data-table tbody");

    data.forEach(item => {
        const row = document.createElement("tr");
        for (const key in item) {
            const cell = document.createElement("td");
            cell.textContent = item[key];
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    });

    const ctx1 = document.getElementById('myChart1').getContext('2d');
    const ctx2 = document.getElementById('myChart2').getContext('2d');
    const ctx3 = document.getElementById('myChart3').getContext('2d');
    const ctx4 = document.getElementById('myChart4').getContext('2d');

    // Función para calcular promedios de preguntas
    function calculateQuestionAverages(data) {
        return [1, 2, 3, 4, 5].map(q =>
            data.reduce((sum, student) => sum + student[`Pregunta_${q}`], 0) / data.length
        );
    }

    // Gráfico 1: Promedio de cada pregunta
    const questionAverages = calculateQuestionAverages(data);
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'],
            datasets: [{
                label: 'Promedio de respuestas',
                data: questionAverages,
                borderWidth: 1,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico 2: Promedio por centro
    const centers = Array.from(new Set(data.map(d => d.Centro)));
    const centerAverages = centers.map(center => {
        const centerData = data.filter(d => d.Centro === center);
        return calculateQuestionAverages(centerData);
    });

    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'],
            datasets: centers.map((center, index) => ({
                label: center,
                data: centerAverages[index],
                borderWidth: 1,
                backgroundColor: `rgba(${index * 50}, 99, 132, 0.2)`,
                borderColor: `rgba(${index * 50}, 99, 132, 1)`
            }))
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico 3: Promedio por grado
    const grades = Array.from(new Set(data.map(d => d.Grado)));
    const gradeAverages = grades.map(grade => {
        const gradeData = data.filter(d => d.Grado === grade);
        return calculateQuestionAverages(gradeData);
    });

    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'],
            datasets: grades.map((grade, index) => ({
                label: grade,
                data: gradeAverages[index],
                borderWidth: 1,
                backgroundColor: `rgba(${index * 50}, 159, 64, 0.2)`,
                borderColor: `rgba(${index * 50}, 159, 64, 1)`
            }))
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico 4: Promedio por sexo
    const genders = Array.from(new Set(data.map(d => d.Sexo)));
    const genderAverages = genders.map(gender => {
        const genderData = data.filter(d => d.Sexo === gender);
        return calculateQuestionAverages(genderData);
    });

    new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'],
            datasets: genders.map((gender, index) => ({
                label: gender,
                data: genderAverages[index],
                borderWidth: 1,
                backgroundColor: `rgba(${index * 100}, 206, 86, 0.2)`,
                borderColor: `rgba(${index * 100}, 206, 86, 1)`
            }))
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
