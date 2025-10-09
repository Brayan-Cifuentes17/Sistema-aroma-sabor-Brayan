import express from "express";
import { 
  createBill, 
  getBillById, 
  getBills, 
  updateBillById, 
  hardDeleteBill, 
  addProductToBill, 
  removeProductFromBill, 
  updateProductsInBill,
  closeBillIfEmpty,
  calculateBillTotal,
  changeProductStateInBill
} from "../controllers/billsController.js";
import { authenticate, authorize } from "../middleware/auth.js";

const router = express.Router();

// Obtener todas las cuentas
router.get("/getBills", authenticate, authorize("read", "bills"), getBills);

// Crear una nueva cuenta
router.post("/createBill", authenticate, authorize("create", "bills"), createBill);

// Obtener una cuenta por ID
router.get("/getBill/:id", authenticate, authorize("read", "bills"), getBillById);

// Actualizar una cuenta
router.put("/updateBill/:id", authenticate, authorize("update", "bills"), updateBillById);

// Eliminar una cuenta (hard delete)
router.delete("/harddeleteBill/:id", authenticate, authorize("delete", "bills"), hardDeleteBill);

// Agregar productos a una cuenta
router.post("/addProductToBill/:id", authenticate, authorize("update", "bills"), addProductToBill);

// Eliminar un producto de una cuenta
router.post("/removeProductFromBill/:id", authenticate, authorize("update", "bills"), removeProductFromBill);

// Actualizar productos en una cuenta
router.put("/updateProductsInBill/:id", authenticate, authorize("update", "bills"), updateProductsInBill);

// Cerrar cuenta si está vacía
router.put("/closeBillIfEmpty/:id", authenticate, authorize("update", "bills"), closeBillIfEmpty);

// Calcular total de la cuenta
router.post("/calculateBillTotal/:id", authenticate, authorize("read", "bills"), calculateBillTotal);

// Cambiar estado de un producto en la cuenta
router.put("/changeProductStateInBill/:id", authenticate, authorize("update", "bills"), changeProductStateInBill);

export default router;