import styles from './Quotes.module.scss';
interface IProps{
    frase: string,
    autor: string,
    background?: string
}

export default function Quotes(props: IProps) {
    const {frase, autor, background} = props;
    return (
        <section className={`${styles.quotes} ${background ? styles['__bg'] : ''}`}>
            <div className={`container flex ${styles.quotes__container}`}>
                <p className={`section-description`}>
                    {frase}
                </p>
                <h4>
                    {autor}
                </h4>
            </div>
        </section>
    )
}