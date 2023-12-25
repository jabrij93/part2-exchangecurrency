const MyrValue = ({ inputCurrency, myr }) => {
    if (!inputCurrency) return null; // Don't render anything if the message is null or empty

    // const notificationStyle = type === 'error' ? 'notification error' : 'notification success';

    return (
        <div>
            1 <span style={{ textTransform: 'uppercase' }}>{inputCurrency}</span> equals to <span style={{ textTransform: 'uppercase' }}>{myr} MYR</span> 
        </div>
    )
}

export default MyrValue