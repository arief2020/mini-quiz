const AnswerService = require("../services/answer.service");

class AnswersController {

	static async findAll(req, res, next) {

		try {
			const answers = await AnswersService.findAll();
			res.status(200).json(answers);
		} catch (error) {
			next(error);
		}
	}

	static async findById(req, res, next) {

		try {
			const answer = await AnswerService.findById(req.params.id);
			res.status(200).json(answer);
		} catch (error) {
			next(error);
		}
	}

	static async create(req, res, next) {

		try {
			const answer = await AnswerService.create(req.body);
			res.status(201).json(answer);
		} catch (error) {
			next(error);
		}
	}

	static async update(req, res, next) {

		try {
			const answer = await AnswerService.update(req.params.id, req.body);
			res.status(200).json(answer);
		} catch (error) {
			next(error);
		}
	}

	static async delete(req, res, next) {

		try {
			const answer = await AnswerService.delete(req.params.id);
			res.status(200).json(answer);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = AnswersController;