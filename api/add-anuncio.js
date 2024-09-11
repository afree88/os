// api/add-anuncio.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nome, preco, descricao, imagem, video } = req.body;

        // Aqui você pode salvar os dados em um banco de dados ou realizar outra lógica

        res.status(200).json({ message: 'Anúncio recebido com sucesso!' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
