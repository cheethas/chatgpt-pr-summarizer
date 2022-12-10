"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var core_1 = __importDefault(require("@actions/core"));
var github_1 = __importDefault(require("@actions/github"));
var util_1 = require("util");
var utils_1 = require("./utils");
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var inputs, _a, owner, repo, sha, token, octokit, chatGptOutput, error_1;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    _b = {};
                    return [4 /*yield*/, core_1["default"].getIDToken()];
                case 1:
                    inputs = (_b.token = _c.sent(),
                        _b.repository = core_1["default"].getInput("repository"),
                        _b.sha = core_1["default"].getInput("sha"),
                        _b.body = core_1["default"].getInput("body"),
                        _b.path = core_1["default"].getInput("path"),
                        _b.position = +core_1["default"].getInput("position"),
                        _b.chatGptSessionKey = core_1["default"].getInput("chat-gpt-session-key"),
                        _b.diff = core_1["default"].getInput("diff"),
                        _b);
                    _a = inputs.repository.split("/"), owner = _a[0], repo = _a[1];
                    sha = inputs.sha ? inputs.sha : (0, utils_1.getSha)();
                    if (!inputs.chatGptSessionKey) {
                        throw new Error("Missing Session Key");
                    }
                    token = core_1["default"].getIDToken();
                    octokit = github_1["default"].getOctokit(inputs.token);
                    console.log(token);
                    console.log(github_1["default"].context);
                    console.log("diff");
                    console.log(inputs.diff);
                    chatGptOutput = "output test";
                    // Create commit comment with output
                    return [4 /*yield*/, octokit.rest.repos.createCommitComment({
                            owner: owner,
                            repo: repo,
                            commit_sha: sha,
                            body: chatGptOutput,
                            path: inputs.path,
                            position: inputs.position
                        })];
                case 2:
                    // Create commit comment with output
                    _c.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _c.sent();
                    if (error_1 instanceof Error) {
                        core_1["default"].debug((0, util_1.inspect)(error_1));
                        core_1["default"].setFailed(error_1.message);
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBaUM7QUFDakMsMkRBQXFDO0FBQ3JDLDZCQUErQjtBQUMvQixpQ0FBaUM7QUFhakMsU0FBZSxHQUFHOzs7Ozs7Ozs7b0JBR0wscUJBQU0saUJBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQTs7b0JBRDFCLE1BQU0sSUFDVixRQUFLLEdBQUUsU0FBdUI7d0JBQzlCLGFBQVUsR0FBRSxpQkFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7d0JBQ3ZDLE1BQUcsR0FBRSxpQkFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQ3pCLE9BQUksR0FBRSxpQkFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7d0JBQzNCLE9BQUksR0FBRSxpQkFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7d0JBQzNCLFdBQVEsR0FBRSxDQUFDLGlCQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQzt3QkFDcEMsb0JBQWlCLEdBQUUsaUJBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7d0JBQ3hELE9BQUksR0FBRSxpQkFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7MkJBQzVCO29CQUNLLEtBQWdCLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUEzQyxLQUFLLFFBQUEsRUFBRSxJQUFJLFFBQUEsQ0FBaUM7b0JBQzdDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFBLGNBQU0sR0FBRSxDQUFDO29CQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO3dCQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7cUJBQ3hDO29CQUVLLEtBQUssR0FBRyxpQkFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMxQixPQUFPLEdBQUcsbUJBQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUduQixhQUFhLEdBQUcsYUFBYSxDQUFDO29CQUVwQyxvQ0FBb0M7b0JBQ3BDLHFCQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDOzRCQUMzQyxLQUFLLEVBQUUsS0FBSzs0QkFDWixJQUFJLEVBQUUsSUFBSTs0QkFDVixVQUFVLEVBQUUsR0FBRzs0QkFDZixJQUFJLEVBQUUsYUFBYTs0QkFDbkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJOzRCQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7eUJBQzFCLENBQUMsRUFBQTs7b0JBUkYsb0NBQW9DO29CQUNwQyxTQU9FLENBQUM7Ozs7b0JBRUgsSUFBSSxPQUFLLFlBQVksS0FBSyxFQUFFO3dCQUMxQixpQkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFBLGNBQU8sRUFBQyxPQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixpQkFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQy9COzs7Ozs7Q0FFSjtBQUVELEdBQUcsRUFBRSxDQUFDIn0=