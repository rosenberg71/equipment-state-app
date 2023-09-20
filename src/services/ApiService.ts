import { ValidStateColor } from "types/ValidStateColor";

const BASE_URL = "http://localhost:3001/api";

export default class ApiService {
    static async fetchEquipmentId() : Promise<number> {
        try {
            const response = await fetch(`${BASE_URL}/equipment/id`);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data.id;

        } catch (error) {
            console.log("Error:", error);
            throw error; // Re-throw to handle it in the component
        }
    }

    static async sendEquipmentState(stateColor: ValidStateColor) {
        try {
            console.log("trying to send state: ", JSON.stringify(stateColor))
            const response = await fetch(`${BASE_URL}/equipment/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({newState: stateColor})
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.log("Error:", error);
            throw error;
        }
    }
}