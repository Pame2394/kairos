import React, { useState } from "react";

function QuoteModal() {
    const [servicio, setServicio] = useState("");
    const [horas, setHoras] = useState(1);
    const [complejidad, setComplejidad] = useState("media");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCotizar = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("http://127.0.0.1:8000/cotizar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ servicio, horas: Number(horas), complejidad }),
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            setResult(data);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 16, maxWidth: 600 }}>
            <h2>Cotizar servicio</h2>
            <div style={{ marginBottom: 8 }}>
                <input
                    type="text"
                    placeholder="Servicio"
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    style={{ width: '100%', padding: 8 }}
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <input
                    type="number"
                    placeholder="Horas"
                    value={horas}
                    min={1}
                    onChange={(e) => setHoras(e.target.value)}
                    style={{ width: 120, padding: 8 }}
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <select value={complejidad} onChange={(e) => setComplejidad(e.target.value)}>
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                </select>
            </div>
            <div>
                <button onClick={handleCotizar} disabled={loading}>
                    {loading ? 'Cotizando...' : 'Cotizar'}
                </button>
            </div>

            {error && <div style={{ color: 'red', marginTop: 12 }}>Error: {error}</div>}

            {result && (
                <div style={{ marginTop: 16 }}>
                    <h3>Precio: ${result.precio}</h3>
                    <pre style={{ whiteSpace: 'pre-wrap' }}>{result.proforma}</pre>
                </div>
            )}
        </div>
    );
}

export default QuoteModal;
