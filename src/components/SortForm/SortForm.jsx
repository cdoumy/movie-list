import './SortForm.scss';

export default function SortForm({ onChange }) {
    return (
        <form className="sort-form">
            <label htmlFor="sort-form_select">Trier par&nbsp;: </label>
            <select onChange={(e) => onChange(e.target.value)}
                name="sort-form_select" id="sort-form_select" className="field">
                <option value="alphabetical">Ordre alphabétique</option>
                <option value="date">Date de sortie</option>
                <option value="rating">Note</option>
            </select>
        </form>
    )
}
