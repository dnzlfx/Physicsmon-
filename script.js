 // Estructura base de lógica (simplificada)
        const problems = {
            electricFields: [
                { title: "Un Vaporeon Salvaje ha aparecido!!", description: "Para atraparlo responde: ¿Cuál es la magnitud del campo eléctrico a 2m de una carga puntual de 3μC? (k=9×10⁹ N·m²/C²)", answer: "67500", creature: "Electromon" }
            ],
            electricPotential: [
                { title: "Un Pikachu Salvaje ha aparecido!!", description: "Para atraparlo responde: ¿Cuál es el potencial eléctrico a 1m de una carga de 5μC? (k=9×10⁹ N·m²/C²)", answer: "45000", creature: "Potencialmon" }
            ],
            gaussLaw: [
                { title: "Un Gengar salvaje a aparecido!!", description: "Para atraparlo responde: ¿Cuál es el flujo eléctrico a través de una superficie que encierra una carga de 2μC? (ε₀=8.85×10⁻¹² C²/N·m²)", answer: "2.26e5", creature: "Gaussmon" }
            ]
        };
        let currentLevel = null, currentProblem = 0, score = 0;

        document.getElementById('startLevel').onclick = function() {
            currentLevel = document.getElementById('level').value;
            currentProblem = 0;
            showProblem();
        };

        function showProblem() {
            const p = problems[currentLevel][currentProblem];
            document.querySelector('.problem-area').style.display = 'block';
            document.querySelector('.creature-capture').style.display = 'none';
            document.getElementById('problem-title').textContent = p.title;
            document.getElementById('problem-description').textContent = p.description;
            document.getElementById('answer').value = '';
            document.getElementById('feedback').textContent = '';
        }

        document.getElementById('submitAnswer').onclick = function() {
            const p = problems[currentLevel][currentProblem];
            if (document.getElementById('answer').value.trim() === p.answer) {
                score += 10;
                document.getElementById('score').textContent = score;
                document.querySelector('.problem-area').style.display = 'none';
                document.querySelector('.creature-capture').style.display = 'block';
                document.getElementById('creature-name').textContent = `Has atrapado a ${p.creature}!`;
            } else {
                document.getElementById('feedback').textContent = 'Respuesta incorrecta. Intenta de nuevo.';
            }
        };

        document.getElementById('nextProblem').onclick = function() {
            currentProblem++;
            if (problems[currentLevel][currentProblem]) {
                showProblem();
            } else {
                document.querySelector('.problem-area').style.display = 'none';
                document.querySelector('.creature-capture').style.display = 'none';
                alert('¡Nivel completado!');
            }
        };