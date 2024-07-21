/**
 * Error handler for Joi validation
 * @private
 * @memberof VehicleController
 * @param {import("joi").ValidationError} error
 * @param {import("express").Response} res
 * @returns {import("express").Response}
 */

export function JoiError(error, res) {
  return res.status(400).json({
    code: res.statusCode,
    message: error.message,
  });
}
