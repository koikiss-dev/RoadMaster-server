"use strict";

/**
 * Abstract class for controllers
 * @class ControllerBaseModel
 */
class ControllerBaseModel {
  constructor() {
    if (this.constructor === ControllerBaseModel) {
      throw new TypeError(
        "Abstract class ControllerBaseModel cannot be instantiated.",
      );
    }
  }

  /**
   * Get all register with an limit option
   * @static
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegisters(req, res) {}

  /**
   * Get one register
   * @static
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegister(req, res) {}

  /**
   * Create a new register
   * @static
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async createRegister(req, res) {}

  /**
   * Update a new register
   * @static
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async updateRegister(req, res) {}
}

export default ControllerBaseModel;
