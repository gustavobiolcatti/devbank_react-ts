import './style.css';

export default function Card({ children }: any): JSX.Element {
    return (
        <div className="card">
            {children}
        </div>
    )
}