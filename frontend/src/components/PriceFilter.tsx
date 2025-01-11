type Props = {
    selectedPrice?: number,
    onChange: (value?: number) => void;
}

const PriceFilter = ({selectedPrice, onChange}: Props) =>{
    return (
        <div>
            <h4 className="text-md font-semibold mb-2">Max Price</h4>
            <select value={selectedPrice} onChange={(e)=> onChange(e.target.value ? parseInt(e.target.value) : undefined)}>
                <option value="">Select Max Price</option>
                {[50,100,200,500,1000,2000,5000,1000].map((price)=>(
                    <option value={price}>{price}</option>
                ))}
            </select>
        </div>
    )
};

export default PriceFilter;