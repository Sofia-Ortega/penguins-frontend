import axios from "axios";
import { IPenguin } from "../types/types";

const API_BASE_URL = "http://localhost:8080";
const PENGUIN_BASE_URL = `${API_BASE_URL}/penguins`;

export const getPenguins = async (): Promise<IPenguin[]> => {
  try {
    const res = await axios.get(`${PENGUIN_BASE_URL}`);
    return res.data;
  } catch (err) {
    console.error("[ERROR] penguinService.getPenguins() ", err);
    throw err;
  }
};

/**
 *
 * @param penguinId id of penguin want to feed
 * @returns updated hunger of penguin
 */
export const feedPenguin = async (penguinId: number): Promise<number> => {
  try {
    const res = await axios.post(`${PENGUIN_BASE_URL}/feed/${penguinId}`);

    const updatedHunger: number = res.data;

    return updatedHunger;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.status === 400) {
      return 0; // bad request indicates that tried to feed a penguin with 0 hunger
    }

    // else
    console.error("[ERROR] penguinService.feedPenguin() ", err);
    throw err;
  }
};
