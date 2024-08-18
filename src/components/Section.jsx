// eslint-disable-next-line react/prop-types
export default function Section({title,children, ...remaining}) {
    return (
        <section {...remaining}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}