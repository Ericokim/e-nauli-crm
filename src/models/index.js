import {
  AuthLogin,
  AuthResetPassword,
  AuthchangePassword,
  AuthLogout,
} from "./Auth";
import { getVehicles, addVehicle, updateVehicle } from "./Vehicle";
import { getSaccos, addSacco, updateSacco } from "./Sacco";

export const models = {
  AuthLogin,
  AuthResetPassword,
  AuthchangePassword,
  AuthLogout,

  getVehicles,
  addVehicle,
  updateVehicle,

  getSaccos,
  addSacco,
  updateSacco,
};
