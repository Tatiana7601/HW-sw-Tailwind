import {useEffect, useState} from 'react';
import {base_url, period_days_24} from "../utils/constants.ts";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...']);

    const fillPlanets = async function (url:string) {
        try {
            const response = await fetch(url);
            const data:{name:string}[] = await response.json();
            const planetsResponse = data.map(obj => obj.name);
            setPlanets(planetsResponse);
            const info = {
                payload: planetsResponse,
                time: Date.now()
            }
            localStorage.setItem('planets', JSON.stringify(info));
        }catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const planetInfo = JSON.parse(localStorage.getItem("planets")!);
        if (planetInfo && (Date.now() - planetInfo.time) < period_days_24) {
            setPlanets(planetInfo.payload);
        } else {
            fillPlanets(`${base_url}/v1/planets`)
        }
    }, [])

    const fieldClasses = `
        w-full
        p-3
        border border-gray-300
        rounded-md
        bg-white
        mt-1.5 mb-4
        text-black
        resize-y
    `;

    return (
        <div>
            <form className="w-1/2 mx-auto my-5" onSubmit={(e) => e.preventDefault()}>
                {/* Input Username */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Username"
                        aria-label="Username"
                        className={fieldClasses}
                    />
                </div>

                {/* Select Planet */}
                <div className="mb-3">
                    <select className={fieldClasses} aria-label="Default select example">
                        {planets.map(planet =>
                            <option key={planet} value={planet}>{planet}</option>
                        )}
                    </select>
                </div>

                {/* Textarea */}
                <div className="mb-3">
                    <textarea
                        className={fieldClasses + " h-40"}
                        aria-label="With textarea"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-green-700 hover:bg-green-800 text-white py-3 px-5 rounded-md cursor-pointer"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
export default Contact;