"use strict";

module.exports = function(session_middleware, session_tries) {
	session_tries = session_tries || 3;

	return function(req, res, next) {
		var tries = 0;

		function attempt_session_init(err) {
			if (err) {
				return next(err);
			}

			tries++;

			if (req.session !== undefined) {
				return next();
			}

			if (tries > session_tries) {
				return next(new Error('Undefined session'));
			}

			session_middleware(req, res, attempt_session_init);
		}

		attempt_session_init();
	}
};