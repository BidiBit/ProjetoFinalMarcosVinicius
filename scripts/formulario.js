document.getElementById('commentForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio do formulário

            // Obtendo os valores dos campos
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const rating = document.getElementById('rating').value;
            const comment = document.getElementById('comment').value;
            const subscribe = document.getElementById('subscribe').checked;

            // Exibindo os dados inseridos
            const resultSection = document.getElementById('resposta');
            resultSection.innerHTML = `
                <h2>Dados Enviados:</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Avaliação:</strong> ${rating}</p>
                <p><strong>Comentário:</strong> ${comment}</p>
                <p><strong>Inscrição na Newsletter:</strong> ${subscribe ? 'Sim' : 'Não'}</p>
            `;
        });

        function clearForm() {
            document.getElementById('commentForm').reset(); // Limpa o formulário
            document.getElementById('resposta').innerHTML = ''; // Limpa os dados exibidos
        }