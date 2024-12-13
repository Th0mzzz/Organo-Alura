import './footer.css'

export const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='redes-container'>
                <img className='rede-item' src='./img/fb.png' alt='logo do facebook' />
                <img className='rede-item' src='./img/tw.png' alt='logo do twitter' />
                <img className='rede-item' src='./img/ig.png' alt='logo do instagram' />
            </div>
            <img className='logo' src='./img/logo.png' alt='logo do organo' />
            <p>Desenvolvido por Alura</p>
        </footer>
    )
}