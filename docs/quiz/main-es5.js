function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center text-light py-4\">Администрация</h2>\n<div class=\"d-flex justify-content-center\">\n    <button class=\"mx-2 btn btn-primary shadow\" (click)=\"addQuestion()\">Добави въпрос</button>\n    <button class=\"mx-2 btn btn-primary shadow\" (click)=\"addCategory()\">Добави категория</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/category/add-category/add-category.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/add-category/add-category.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoryAddCategoryAddCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center text-success\"><i class=\"material-icons\">add</i> Нова категория</h2>\n<form [formGroup]=\"addForm\">\n    <mat-form-field class=\"w-100\">\n        <mat-label>Нова категория</mat-label>\n        <input matInput type=\"text\" placeholder=\"Нова категория\" formControlName=\"title\">\n    </mat-form-field>\n    <div class=\"d-flex justify-content-center\">\n        <button mat-button [disabled]=\"addForm.invalid\" (click)=\"addCategory()\" color=\"primary\">Добави</button>\n        <button class=\"btn btn-primary mx-2\" (click)=\"showAll()\">Всички</button>\n        <button [mat-dialog-close]=\"\" mat-button color=\"warn\">Откажи</button>\n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/category/dismiss-category/dismiss-category.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/dismiss-category/dismiss-category.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoryDismissCategoryDismissCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center text-danger\">Изтриване на {{ data.category.title }}</h2>\n<div class=\"d-flex justify-content-center\">\n    <button class=\"mx-2\" mat-mini-fab color=\"accept\" (click)=\"back()\"><i class=\"material-icons\">undo</i></button>\n    <button mat-mini-fab color=\"warn\" (click)=\"dismissCategory()\"><i class=\"material-icons\">clear</i></button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/category/edit-category/edit-category.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/edit-category/edit-category.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoryEditCategoryEditCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center text-primary\">Редактирай категория <span class=\"font-weight-bold\">{{ data.category.title }}</span></h2>\n<form [formGroup]=\"editForm\">\n    <mat-form-field class=\"w-100\">\n        <mat-label>Нова категория</mat-label>\n        <input matInput type=\"text\" placeholder=\"Нова категория\" formControlName=\"title\">\n    </mat-form-field>\n    <div class=\"d-flex justify-content-center\">\n        <button mat-button [disabled]=\"editForm.invalid\" (click)=\"editCategory()\" color=\"primary\">Редактирай</button>\n        <button [mat-dialog-close]=\"\" mat-button color=\"warn\">Откажи</button>\n    </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/category/list-categories/list-categories.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/list-categories/list-categories.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoryListCategoriesListCategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isAll\">\n    <h2 class=\"text-center text-success\">Всички категории</h2>\n    <mat-spinner class=\"mx-auto\" *ngIf=\"!categories\"></mat-spinner>\n    <button class=\"w-100 item my-2 p-2\" mat-raised-button color=\"accept\" *ngFor=\"let category of categories\" (click)=\"getById(category.id)\">{{ category.title }}</button>\n</div>\n<div *ngIf=\"!isAll && category\" class=\"category\">\n    <h2 class=\"text-center text-success\">Категория</h2>\n    <h6 class=\"p-2 my-2 bg-primary shadow text-light rounded\">{{ category.title }}</h6>\n    <div class=\"d-flex justify-content-center\">\n        <button mat-mini-fab color=\"primary\" (click)=\"editCategory()\"><i class=\"material-icons\">edit</i></button>\n        <button class=\"mx-2\" mat-mini-fab color=\"warn\" (click)=\"dismissCategory()\"><i class=\"material-icons\">clear</i></button>\n        <button mat-mini-fab color=\"accept\" (click)=\"showAll()\"><i class=\"material-icons\">undo</i></button>\n    </div>\n</div>\n<button mat-mini-fab color=\"accept\" (click)=\"back()\"><i class=\"material-icons\">undo</i></button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-primary shadow\">\n    <div class=\"container py-4 d-flex justify-content-between\">\n        <div class=\"d-flex align-items-center\">\n            <h2 class=\"text-center text-light text-uppercase\" routerLink=\"/all\">{{ title }}</h2>\n        </div>\n        <div *ngIf=\"auth.user$ | async as user; else login\">\n            <button (click)=\"auth.signOut()\" class=\"btn btn-outline-light mx-4\">Изход</button>\n            <span class=\"text-light\">{{ user.displayName }}</span>\n        </div>\n    </div>\n</div>\n<ng-template #login>\n    <button (click)=\"auth.googleSignin()\" class=\"btn btn-outline-light\">Вход</button>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question/add-question/add-question.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question/add-question/add-question.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionAddQuestionAddQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center\">Нов въпрос</h2>\n<form [formGroup]=\"addForm\">\n    <mat-form-field class=\"w-100\">\n        <mat-label>Въпрос</mat-label>\n        <input matInput placeholder=\"Заглавие на въпроса\" formControlName=\"title\">\n    </mat-form-field>\n    <mat-form-field class=\"w-100\">\n        <mat-label>Напишете кратко описание на въпроса</mat-label>\n        <textarea matInput placeholder=\"Напишете кратко описание на въпроса\" formControlName=\"description\"></textarea>\n    </mat-form-field>\n    <mat-form-field class=\"w-100\">\n        <mat-label>Изберете категория</mat-label>\n        <mat-select formControlName=\"category\">\n            <mat-option>Няма</mat-option>\n            <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">\n                {{ category.title }}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n</form>\n<div class=\"add-answer\">\n    <mat-form-field class=\"w-100\">\n        <mat-label>Отговор</mat-label>\n        <input matInput placeholder=\"Отговор\" [(ngModel)]=\"content\">\n    </mat-form-field>\n    <div class=\"d-flex justify-content-between\">\n        <mat-checkbox [(ngModel)]=\"isCorrect\">Верен отговор</mat-checkbox>\n        <button class=\"btn btn-primary\" (click)=\"addAnswer()\">{{ answers.length }} Добави отговора</button>\n    </div>\n</div>\n<div class=\"d-flex justify-content-between my-2\">\n    <button type=\"button\" [disabled]=\"!addForm.valid\" (click)=\"addQuestion()\" class=\"btn btn-outline-primary\">Добави</button>\n    <button type=\"button\" (click)=\"closeWindow()\" class=\"btn btn-outline-danger\">Откажи</button>\n    <button type=\"button\" (click)=\"statusQuestion()\" class=\"btn btn-outline-info\">Статус</button>\n    <button type=\"button\" (click)=\"allQuestions()\" class=\"btn btn-outline-primary\" (click)=\"allQuestions()\">Въпроси въпроси</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question/all-questions/all-questions.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question/all-questions/all-questions.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionAllQuestionsAllQuestionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"isSelectedCategory && !questions\" class=\"mx-auto\"></mat-spinner>\n<p class=\"text-center text-light\" *ngIf=\"questions && questions.length === 0\">Тази категория е празна</p>\n<div *ngIf=\"isSelectedCategory && currentQuestion\">\n    <h2 class=\"text-center py-4 text-light\">Въпрос {{ currentQuestionIndex }} от {{ questions.length }}</h2>\n    <h2 class=\"p-4 m-2 bg-primary shadow rounded text-light text-center\">{{ currentQuestion.title }}</h2>\n    <div class=\"d-flex justify-content-center\">\n        <button mat-button class=\"p-4 m-2 bg-primary shadow rounded text-light\" *ngFor=\"let answer of currentQuestion.answers; let i = index\" (click)=\"nextQuestion(i)\">{{ answer.content }}</button>\n    </div>\n</div>\n<div *ngIf=\"!isSelectedCategory\">\n    <h2 class=\"text-center py-4 text-light\">Изберете категория</h2>\n    <div class=\"categories\">\n        <button (click)=\"wasCategory()\" mat-button class=\"w-100 p-4 m-2 bg-primary shadow rounded text-light\">Без категория</button>\n        <mat-spinner *ngIf=\"!categories\" class=\"mx-auto\"></mat-spinner>\n        <button (click)=\"selectCategory(i)\" mat-button class=\"w-100 p-4 m-2 bg-primary shadow rounded text-light\" *ngFor=\"let category of categories; let i = index\">{{ category.title }}</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question/correct-answer/correct-answer.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question/correct-answer/correct-answer.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionCorrectAnswerCorrectAnswerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center text-success\">{{ data.isCorrect ? \"Верен отговор\" : \"Грешен отговор\" }}</h2>\n<h4 class=\"text-center text-secondary my-4\">{{ data.question.title }}</h4>\n<h6 class=\"text-primary\">Интересен факт</h6>\n<p class=\"text-secondary text-center\">{{ data.question.description }}</p>\n<div class=\"d-flex justify-content-center\">\n    <button class=\"btn btn-primary\" [mat-dialog-close]=\"\">Продължи</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question/edit-question/edit-question.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question/edit-question/edit-question.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionEditQuestionEditQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center text-primary\">Редактирай въпрос</h2>\n<form [formGroup]=\"editForm\">\n    <mat-form-field class=\"w-100\">\n        <mat-label>Въпрос</mat-label>\n        <input matInput placeholder=\"Заглавие на въпроса\" formControlName=\"title\">\n    </mat-form-field>\n    <mat-form-field class=\"w-100\">\n        <mat-label>Напишете кратко описание на въпроса</mat-label>\n        <textarea matInput placeholder=\"Напишете кратко описание на въпроса\" formControlName=\"description\"></textarea>\n    </mat-form-field>\n</form>\n<div class=\"add-answer\">\n    <mat-form-field class=\"w-100\">\n        <mat-label>Отговор</mat-label>\n        <input matInput placeholder=\"Отговор\" [(ngModel)]=\"content\">\n    </mat-form-field>\n    <div class=\"d-flex justify-content-between\">\n        <mat-checkbox [(ngModel)]=\"isCorrect\">Верен отговор</mat-checkbox>\n        <button class=\"btn btn-primary\" (click)=\"addAnswer()\">{{ question.answers.length }} Добави отговора</button>\n    </div>\n</div>\n<ul *ngIf=\"question\" class=\"answers\">\n    <li matTooltip=\"Изтрии отговора\" matTooltipClass=\"bg-danger\" *ngFor=\"let answer of question.answers; let i = index\" class=\"d-flex justify-content-between p-2 m-2 rounded shadow bg-primary text-light\" (click)=\"removeAnswer(i)\">\n        <span>{{ answer.content }}</span>\n        <span>{{ answer.isCorrect ? \"Верен отговор\" : \"Грешен отговор\" }}</span>\n    </li>\n</ul>\n<div class=\"d-flex justify-content-between my-2\">\n    <button type=\"button\" [disabled]=\"!editForm.valid\" (click)=\"editQuestion()\" class=\"btn btn-outline-primary\">Редактирай</button>\n    <button type=\"button\" (click)=\"closeWindow()\" class=\"btn btn-outline-danger\">Откажи</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question/incorrect-answer/incorrect-answer.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question/incorrect-answer/incorrect-answer.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionIncorrectAnswerIncorrectAnswerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center text-danger\">{{ data.isCorrect ? \"Верен отговор\" : \"Грешен отговор\" }}</h2>\n<h4 class=\"text-center text-secondary my-4\">{{ data.question.title }}</h4>\n<p class=\"text-success\">{{ correctAnswers.length === 1 ? \"Верен отговор\" : \"Верни отговори\" }}</p>\n<div class=\"d-flex justify-content-start\">\n    <h6 *ngFor=\"let answer of correctAnswers\" class=\"text-success mx-2\">{{ answer.content }}</h6>\n</div>\n<h6 class=\"text-primary pt-4\">Интересен факт</h6>\n<p class=\"text-secondary text-center\">{{ data.question.description }}</p>\n<div class=\"d-flex justify-content-center\">\n    <button class=\"btn btn-primary\" [mat-dialog-close]=\"\">Продължи</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question/list-questions/list-questions.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question/list-questions/list-questions.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionListQuestionsListQuestionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner class=\"mx-auto\" *ngIf=\"!questions || !question && !isShowAll\"></mat-spinner>\n<div *ngIf=\"isShowAll && questions\" class=\"all\">\n    <h2 class=\"text-center\">Всички въпроси</h2>\n    <ul>\n        <li class=\"p-2 my-2 bg-primary shadow text-light rounded\" *ngFor=\"let question of questions; let i = index\" (click)=\"showQuestion(question.id)\">{{ question.title }}</li>\n    </ul>\n</div>\n<div *ngIf=\"!isShowAll && question\">\n    <h4 class=\"text-center\">{{ question.title }}</h4>\n    <div class=\"d-flex justify-content-center\">\n        <button mat-mini-fab color=\"accent\" matTooltip=\"Назад\" matTooltipPosition=\"above\" (click)=\"showAll()\"><i class=\"material-icons\">undo</i></button>\n        <button class=\"mx-2\" mat-mini-fab color=\"primary\" matTooltip=\"Редактирай\" matTooltipPosition=\"above\" (click)=\"editQuestion()\"><i class=\"material-icons\">create</i></button>\n        <button mat-mini-fab color=\"warn\" matTooltip=\"Изтрии\" matTooltipClass=\"bg-danger\" matTooltipPosition=\"above\" (click)=\"removeQuestion()\"><i class=\"material-icons\">clear</i></button>\n    </div>\n</div>\n<button mat-mini-fab color=\"accept\" matTooltip=\"Затвори\" matTooltipClass=\"bg-danger\" matTooltipPosition=\"above\" (click)=\"closeWindow()\"><i class=\"material-icons\">undo</i></button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question/remove-question/remove-question.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question/remove-question/remove-question.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionRemoveQuestionRemoveQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center text-danger\">{{ data.question.title }}</h2>\n<div class=\"d-flex justify-content-center\">\n    <button class=\"mx-2\" mat-mini-fab color=\"warn\" matTooltip=\"Изтрии\" matTooltipClass=\"bg-danger\" matTooltipPosition=\"above\" [mat-dialog-close]=\"data.question.id\" (click)=\"removeQuestion(data.question.id)\"><i class=\"material-icons\">clear</i></button>\n    <button mat-mini-fab color=\"accent\" matTooltip=\"Назад\" matTooltipPosition=\"above\" (click)=\"back()\"><i class=\"material-icons\">undo</i></button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question/status-question/status-question.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question/status-question/status-question.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionStatusQuestionStatusQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center\">{{ data.title }}</h2>\n<ul>\n    <li *ngFor=\"let answer of data.answers\" class=\"p-4 m-2 d-flex justify-content-between\">\n        <p>{{ answer.content }}</p>\n        <p>{{ answer.isCorrect ? \"Верен отговор\" : \"Грешен отговор\" }}</p>\n    </li>\n</ul>\n<h4 class=\"text-center\">{{ data.description }}</h4>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin/admin.component.css":
  /*!*******************************************!*\
    !*** ./src/app/admin/admin.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _question_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../question/add-question/add-question.component */
    "./src/app/question/add-question/add-question.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../category/add-category/add-category.component */
    "./src/app/category/add-category/add-category.component.ts");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(dialog) {
        _classCallCheck(this, AdminComponent);

        this.dialog = dialog;
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addQuestion",
        value: function addQuestion() {
          this.dialog.open(_question_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_2__["AddQuestionComponent"], {
            width: '700px',
            backdropClass: 'bg-primary',
            disableClose: true
          });
        }
      }, {
        key: "addCategory",
        value: function addCategory() {
          this.dialog.open(_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__["AddCategoryComponent"], {
            width: '400px',
            backdropClass: 'bg-primary',
            disableClose: true
          });
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/admin/admin.component.css")).default]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _question_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../question/add-question/add-question.component */
    "./src/app/question/add-question/add-question.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _question_status_question_status_question_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../question/status-question/status-question.component */
    "./src/app/question/status-question/status-question.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _question_edit_question_edit_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../question/edit-question/edit-question.component */
    "./src/app/question/edit-question/edit-question.component.ts");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../category/add-category/add-category.component */
    "./src/app/category/add-category/add-category.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_question_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_2__["AddQuestionComponent"], _admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _question_status_question_status_question_component__WEBPACK_IMPORTED_MODULE_9__["StatusQuestionComponent"], _question_edit_question_edit_question_component__WEBPACK_IMPORTED_MODULE_11__["EditQuestionComponent"], _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_13__["AddCategoryComponent"]],
      imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]],
      exports: [_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"]],
      providers: [],
      bootstrap: [],
      entryComponents: [_question_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_2__["AddQuestionComponent"], _question_status_question_status_question_component__WEBPACK_IMPORTED_MODULE_9__["StatusQuestionComponent"], _question_edit_question_edit_question_component__WEBPACK_IMPORTED_MODULE_11__["EditQuestionComponent"], _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_13__["AddCategoryComponent"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _question_all_questions_all_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./question/all-questions/all-questions.component */
    "./src/app/question/all-questions/all-questions.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/guards/auth.guard */
    "./src/app/auth/guards/auth.guard.ts");

    var routes = [{
      path: '',
      component: _question_all_questions_all_questions_component__WEBPACK_IMPORTED_MODULE_3__["AllQuestionsComponent"]
    }, {
      path: 'all',
      component: _question_all_questions_all_questions_component__WEBPACK_IMPORTED_MODULE_3__["AllQuestionsComponent"]
    }, {
      path: 'admin',
      canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'quiz';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin/admin.module */
    "./src/app/admin/admin.module.ts");
    /* harmony import */


    var _question_question_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./question/question.module */
    "./src/app/question/question.module.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _category_category_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./category/category.module */
    "./src/app/category/category.module.ts");
    /* harmony import */


    var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth/guards/auth.guard */
    "./src/app/auth/guards/auth.guard.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_9__["AdminModule"], _question_question_module__WEBPACK_IMPORTED_MODULE_10__["QuestionModule"], _category_category_module__WEBPACK_IMPORTED_MODULE_12__["CategoryModule"]],
      providers: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      entryComponents: []
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
      bootstrap: []
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/auth/guards/auth.guard.ts":
  /*!*******************************************!*\
    !*** ./src/app/auth/guards/auth.guard.ts ***!
    \*******************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/auth/services/auth.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var user = JSON.parse(this.authService.isAdmin);

          if (user.isAdmin) {
            return true;
          } else {
            this.router.navigate(['']);
          }

          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/services/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/services/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afAuth, afs) {
        var _this = this;

        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.afs = afs;
        this.user$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
          if (user) {
            return _this.afs.doc("users/".concat(user.uid)).valueChanges();
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
          }
        }));
      }

      _createClass(AuthService, [{
        key: "googleSignin",
        value: function googleSignin() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var provider, credential;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    provider = new firebase__WEBPACK_IMPORTED_MODULE_6__["auth"].GoogleAuthProvider();
                    _context.next = 3;
                    return this.afAuth.auth.signInWithPopup(provider);

                  case 3:
                    credential = _context.sent;
                    _context.next = 6;
                    return this.afs.collection("users").doc(credential.user.uid).valueChanges().subscribe(function (data) {
                      localStorage.setItem("user", JSON.stringify(data));
                    });

                  case 6:
                    return _context.abrupt("return", this.updateUserData(credential.user));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "signOut",
        value: function signOut() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.afAuth.auth.signOut();

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "updateUserData",
        value: function updateUserData(user) {
          var userRef = this.afs.doc("users/".concat(user.uid));
          var data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName
          };
          return userRef.set(data, {
            merge: true
          });
        }
      }, {
        key: "isAdmin",
        get: function get() {
          return localStorage.getItem("user");
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/category/add-category/add-category.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/category/add-category/add-category.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoryAddCategoryAddCategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\r\n    outline: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvYWRkLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/category/add-category/add-category.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/category/add-category/add-category.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AddCategoryComponent */

  /***/
  function srcAppCategoryAddCategoryAddCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function () {
      return AddCategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_category_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/category.model */
    "./src/app/category/models/category.model.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/category.service */
    "./src/app/category/services/category.service.ts");
    /* harmony import */


    var _list_categories_list_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../list-categories/list-categories.component */
    "./src/app/category/list-categories/list-categories.component.ts");

    var AddCategoryComponent = /*#__PURE__*/function () {
      function AddCategoryComponent(dialogRef, data, snackBar, categoryService, dialog) {
        _classCallCheck(this, AddCategoryComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.categoryService = categoryService;
        this.dialog = dialog;
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
      }

      _createClass(AddCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addCategory",
        value: function addCategory() {
          var _this2 = this;

          if (this.addForm.valid) {
            this.snackBar.open("Добавяне на категорията", "OK", {
              duration: 2000
            });
            var category = {
              title: this.addForm.value.title,
              questions: []
            };
            this.categoryService.addCategory(category).then(function (data) {
              _this2.snackBar.open("категорията беше добавена успешно!", "OK", {
                duration: 2000
              });

              _this2.showAll();
            });
          }
        }
      }, {
        key: "showAll",
        value: function showAll() {
          this.dialog.open(_list_categories_list_categories_component__WEBPACK_IMPORTED_MODULE_7__["ListCategoriesComponent"], {
            width: '400px',
            backdropClass: 'bg-primary',
            disableClose: true
          });
        }
      }]);

      return AddCategoryComponent;
    }();

    AddCategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: _models_category_model__WEBPACK_IMPORTED_MODULE_2__["Category"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }, {
        type: _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/category/add-category/add-category.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-category.component.css */
      "./src/app/category/add-category/add-category.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], AddCategoryComponent);
    /***/
  },

  /***/
  "./src/app/category/category.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/category/category.module.ts ***!
    \*********************************************/

  /*! exports provided: CategoryModule */

  /***/
  function srcAppCategoryCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryModule", function () {
      return CategoryModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _list_categories_list_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-categories/list-categories.component */
    "./src/app/category/list-categories/list-categories.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _dismiss_category_dismiss_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dismiss-category/dismiss-category.component */
    "./src/app/category/dismiss-category/dismiss-category.component.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./edit-category/edit-category.component */
    "./src/app/category/edit-category/edit-category.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var CategoryModule = function CategoryModule() {
      _classCallCheck(this, CategoryModule);
    };

    CategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_list_categories_list_categories_component__WEBPACK_IMPORTED_MODULE_3__["ListCategoriesComponent"], _dismiss_category_dismiss_category_component__WEBPACK_IMPORTED_MODULE_6__["DismissCategoryComponent"], _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_8__["EditCategoryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]],
      entryComponents: [_list_categories_list_categories_component__WEBPACK_IMPORTED_MODULE_3__["ListCategoriesComponent"], _dismiss_category_dismiss_category_component__WEBPACK_IMPORTED_MODULE_6__["DismissCategoryComponent"], _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_8__["EditCategoryComponent"]]
    })], CategoryModule);
    /***/
  },

  /***/
  "./src/app/category/dismiss-category/dismiss-category.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/category/dismiss-category/dismiss-category.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoryDismissCategoryDismissCategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\r\n    outline: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvZGlzbWlzcy1jYXRlZ29yeS9kaXNtaXNzLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnkvZGlzbWlzcy1jYXRlZ29yeS9kaXNtaXNzLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/category/dismiss-category/dismiss-category.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/category/dismiss-category/dismiss-category.component.ts ***!
    \*************************************************************************/

  /*! exports provided: DismissCategory, DismissCategoryComponent */

  /***/
  function srcAppCategoryDismissCategoryDismissCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DismissCategory", function () {
      return DismissCategory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DismissCategoryComponent", function () {
      return DismissCategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/category.service */
    "./src/app/category/services/category.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var DismissCategory = function DismissCategory() {
      _classCallCheck(this, DismissCategory);
    };

    var DismissCategoryComponent = /*#__PURE__*/function () {
      function DismissCategoryComponent(dialogRef, data, categoryService, snackBar) {
        _classCallCheck(this, DismissCategoryComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.categoryService = categoryService;
        this.snackBar = snackBar;
      }

      _createClass(DismissCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this.dialogRef.close();
        }
      }, {
        key: "dismissCategory",
        value: function dismissCategory() {
          var _this3 = this;

          this.snackBar.open("Изтриване на категорията", "OK", {
            duration: 2000
          });
          this.categoryService.dismissCategory(this.data.category.id).then(function (data) {
            _this3.snackBar.open("Категорията беше изтрита успешно!", "OK", {
              duration: 2000
            });

            _this3.dialogRef.close();
          });
        }
      }]);

      return DismissCategoryComponent;
    }();

    DismissCategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: DismissCategory,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }];
    };

    DismissCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dismiss-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dismiss-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/category/dismiss-category/dismiss-category.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dismiss-category.component.css */
      "./src/app/category/dismiss-category/dismiss-category.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], DismissCategoryComponent);
    /***/
  },

  /***/
  "./src/app/category/edit-category/edit-category.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/category/edit-category/edit-category.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoryEditCategoryEditCategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS9lZGl0LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2VkaXQtY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/category/edit-category/edit-category.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/category/edit-category/edit-category.component.ts ***!
    \*******************************************************************/

  /*! exports provided: EditCategory, EditCategoryComponent */

  /***/
  function srcAppCategoryEditCategoryEditCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCategory", function () {
      return EditCategory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function () {
      return EditCategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/category.service */
    "./src/app/category/services/category.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var EditCategory = function EditCategory() {
      _classCallCheck(this, EditCategory);
    };

    var EditCategoryComponent = /*#__PURE__*/function () {
      function EditCategoryComponent(dialogRef, data, categoryService, snackBar) {
        _classCallCheck(this, EditCategoryComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.categoryService = categoryService;
        this.snackBar = snackBar;
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.data.category.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
      }

      _createClass(EditCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "editCategory",
        value: function editCategory() {
          var _this4 = this;

          if (this.editForm.valid) {
            this.snackBar.open("Редактиране на категорията", "OK", {
              duration: 2000
            });
            var category = {
              title: this.editForm.value.title,
              questions: this.data.category.questions
            };
            this.categoryService.editCategory(this.data.category.id, category).then(function (data) {
              _this4.dialogRef.close();

              _this4.snackBar.open("Категорията беше редактирана успешно!", "OK", {
                duration: 2000
              });
            });
          }
        }
      }]);

      return EditCategoryComponent;
    }();

    EditCategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: EditCategory,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    EditCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/category/edit-category/edit-category.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-category.component.css */
      "./src/app/category/edit-category/edit-category.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], EditCategoryComponent);
    /***/
  },

  /***/
  "./src/app/category/list-categories/list-categories.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/category/list-categories/list-categories.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoryListCategoriesListCategoriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button.item {\r\n    cursor: pointer;\r\n    text-align: left;\r\n}\r\n\r\nbutton {\r\n    outline: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvbGlzdC1jYXRlZ29yaWVzL2xpc3QtY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS9saXN0LWNhdGVnb3JpZXMvbGlzdC1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24uaXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/category/list-categories/list-categories.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/category/list-categories/list-categories.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ListCategoriesComponent */

  /***/
  function srcAppCategoryListCategoriesListCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListCategoriesComponent", function () {
      return ListCategoriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/category.service */
    "./src/app/category/services/category.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _dismiss_category_dismiss_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../dismiss-category/dismiss-category.component */
    "./src/app/category/dismiss-category/dismiss-category.component.ts");
    /* harmony import */


    var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../edit-category/edit-category.component */
    "./src/app/category/edit-category/edit-category.component.ts");

    var ListCategoriesComponent = /*#__PURE__*/function () {
      function ListCategoriesComponent(categoryService, dialogRef, dialog) {
        _classCallCheck(this, ListCategoriesComponent);

        this.categoryService = categoryService;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.isAll = true;
      }

      _createClass(ListCategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showAll();
        }
      }, {
        key: "back",
        value: function back() {
          this.dialogRef.close();
        }
      }, {
        key: "showAll",
        value: function showAll() {
          var _this5 = this;

          this.isAll = true;
          this.categoryService.getAll().subscribe(function (data) {
            _this5.categories = data;
          });
        }
      }, {
        key: "getById",
        value: function getById(id) {
          var _this6 = this;

          this.isAll = false;
          var subscription = this.categoryService.getById(id).subscribe(function (data) {
            subscription.unsubscribe();
            _this6.category = data;
            _this6.category.id = id;
          });
        }
      }, {
        key: "dismissCategory",
        value: function dismissCategory(id) {
          this.dialog.open(_dismiss_category_dismiss_category_component__WEBPACK_IMPORTED_MODULE_4__["DismissCategoryComponent"], {
            width: '700px',
            data: {
              category: this.category
            },
            disableClose: true,
            backdropClass: 'bg-danger'
          });
          this.showAll();
        }
      }, {
        key: "editCategory",
        value: function editCategory(id) {
          this.dialog.open(_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_5__["EditCategoryComponent"], {
            width: '700px',
            data: {
              category: this.category
            },
            disableClose: true,
            backdropClass: 'bg-primary'
          });
          this.showAll();
        }
      }]);

      return ListCategoriesComponent;
    }();

    ListCategoriesComponent.ctorParameters = function () {
      return [{
        type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    ListCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-categories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-categories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/category/list-categories/list-categories.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-categories.component.css */
      "./src/app/category/list-categories/list-categories.component.css")).default]
    })], ListCategoriesComponent);
    /***/
  },

  /***/
  "./src/app/category/models/category.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/category/models/category.model.ts ***!
    \***************************************************/

  /*! exports provided: Category */

  /***/
  function srcAppCategoryModelsCategoryModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Category", function () {
      return Category;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Category = function Category() {
      _classCallCheck(this, Category);
    };
    /***/

  },

  /***/
  "./src/app/category/services/category.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/category/services/category.service.ts ***!
    \*******************************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppCategoryServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(fs) {
        _classCallCheck(this, CategoryService);

        this.fs = fs;
        this.categories = this.fs.collection("categories");
      }

      _createClass(CategoryService, [{
        key: "addCategory",
        value: function addCategory(category) {
          return this.categories.add(category);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.categories.valueChanges({
            idField: "id"
          });
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.categories.doc(id).valueChanges();
        }
      }, {
        key: "dismissCategory",
        value: function dismissCategory(id) {
          return this.categories.doc(id).delete();
        }
      }, {
        key: "editCategory",
        value: function editCategory(id, category) {
          return this.categories.doc(id).set(category, {
            merge: true
          });
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategoryService);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(auth) {
        _classCallCheck(this, NavbarComponent);

        this.auth = auth;
        this.title = "QUIZ";
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/question/add-question/add-question.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/question/add-question/add-question.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionAddQuestionAddQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL2FkZC1xdWVzdGlvbi9hZGQtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/question/add-question/add-question.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/question/add-question/add-question.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AddQuestionComponent */

  /***/
  function srcAppQuestionAddQuestionAddQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function () {
      return AddQuestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/question.service */
    "./src/app/question/services/question.service.ts");
    /* harmony import */


    var _status_question_status_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../status-question/status-question.component */
    "./src/app/question/status-question/status-question.component.ts");
    /* harmony import */


    var _list_questions_list_questions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../list-questions/list-questions.component */
    "./src/app/question/list-questions/list-questions.component.ts");
    /* harmony import */


    var src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/category/services/category.service */
    "./src/app/category/services/category.service.ts");

    var AddQuestionComponent = /*#__PURE__*/function () {
      function AddQuestionComponent(dialogRef, snackBar, questionService, dialog, categoryService) {
        _classCallCheck(this, AddQuestionComponent);

        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.questionService = questionService;
        this.dialog = dialog;
        this.categoryService = categoryService;
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
          category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.answers = [];
        this.isCorrect = false;
      }

      _createClass(AddQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.categoryService.getAll().subscribe(function (data) {
            _this7.categories = data;
          });
        }
      }, {
        key: "closeWindow",
        value: function closeWindow() {
          this.dialogRef.close();
        }
      }, {
        key: "addAnswer",
        value: function addAnswer() {
          var answer = {
            content: this.content,
            isCorrect: this.isCorrect
          };
          this.answers.push(answer);
          this.content = "";
          this.isCorrect = false;
        }
      }, {
        key: "addQuestion",
        value: function addQuestion() {
          var _this8 = this;

          if (this.addForm.valid) {
            this.question = {
              title: this.addForm.value.title,
              answers: this.answers,
              description: this.addForm.value.description,
              categoryId: this.addForm.value.category
            };
            this.snackBar.open("Добавяне на въпроса", "OK", {
              duration: 2000
            });
            this.questionService.addQuestion(this.question).then(function (data) {
              _this8.addForm.reset();

              _this8.answers = [];

              _this8.snackBar.open("Въпросът е добавен успешно!", "OK", {
                duration: 2000
              });
            });
          }
        }
      }, {
        key: "statusQuestion",
        value: function statusQuestion() {
          this.dialog.open(_status_question_status_question_component__WEBPACK_IMPORTED_MODULE_6__["StatusQuestionComponent"], {
            width: '700px',
            data: {
              title: this.addForm.value.title,
              answers: this.answers,
              description: this.addForm.value.description
            },
            backdropClass: 'bg-primary'
          });
        }
      }, {
        key: "allQuestions",
        value: function allQuestions() {
          this.dialog.open(_list_questions_list_questions_component__WEBPACK_IMPORTED_MODULE_7__["ListQuestionsComponent"], {
            width: '400px',
            backdropClass: 'bg-primary',
            disableClose: true
          });
        }
      }]);

      return AddQuestionComponent;
    }();

    AddQuestionComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"]
      }];
    };

    AddQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question/add-question/add-question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-question.component.css */
      "./src/app/question/add-question/add-question.component.css")).default]
    })], AddQuestionComponent);
    /***/
  },

  /***/
  "./src/app/question/all-questions/all-questions.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/question/all-questions/all-questions.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionAllQuestionsAllQuestionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\r\n    outline: none;\r\n}\r\n\r\n.categories {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.categories button {\r\n    font-size: 1.2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vYWxsLXF1ZXN0aW9ucy9hbGwtcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi9hbGwtcXVlc3Rpb25zL2FsbC1xdWVzdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/question/all-questions/all-questions.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/question/all-questions/all-questions.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AllQuestionsComponent */

  /***/
  function srcAppQuestionAllQuestionsAllQuestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllQuestionsComponent", function () {
      return AllQuestionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/question.service */
    "./src/app/question/services/question.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _correct_answer_correct_answer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../correct-answer/correct-answer.component */
    "./src/app/question/correct-answer/correct-answer.component.ts");
    /* harmony import */


    var _incorrect_answer_incorrect_answer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../incorrect-answer/incorrect-answer.component */
    "./src/app/question/incorrect-answer/incorrect-answer.component.ts");
    /* harmony import */


    var src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/category/services/category.service */
    "./src/app/category/services/category.service.ts");

    var AllQuestionsComponent = /*#__PURE__*/function () {
      function AllQuestionsComponent(questionService, snackBar, dialog, categoryService) {
        _classCallCheck(this, AllQuestionsComponent);

        this.questionService = questionService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.categoryService = categoryService;
        this.currentQuestionIndex = 0;
        this.isSelectedCategory = false;
      }

      _createClass(AllQuestionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.categoryService.getAll().subscribe(function (data) {
            _this9.categories = data;
          });
        }
      }, {
        key: "selectCategory",
        value: function selectCategory(index) {
          var _this10 = this;

          this.isSelectedCategory = true;
          this.selectedCategory = this.categories[index];
          this.questionService.getAllByCategory(this.selectedCategory.id).subscribe(function (data) {
            _this10.questions = data;
            _this10.currentQuestion = _this10.questions[_this10.currentQuestionIndex++];
          });
        }
      }, {
        key: "wasCategory",
        value: function wasCategory() {
          this.isSelectedCategory = true;
          this.getAll();
        }
      }, {
        key: "getAll",
        value: function getAll() {
          var _this11 = this;

          var subscription = this.questionService.getAll().subscribe(function (data) {
            subscription.unsubscribe();
            _this11.questions = data;
            _this11.currentQuestion = _this11.questions[_this11.currentQuestionIndex++];
          });
        }
      }, {
        key: "nextQuestion",
        value: function nextQuestion() {
          var _this12 = this;

          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
          var isCorrect = this.currentQuestion.answers[index].isCorrect;

          if (isCorrect) {
            this.dialog.open(_correct_answer_correct_answer_component__WEBPACK_IMPORTED_MODULE_5__["CorrectAnswerComponent"], {
              width: '400px',
              data: {
                isCorrect: isCorrect,
                question: this.currentQuestion
              },
              backdropClass: 'bg-success',
              disableClose: true
            }).afterClosed().subscribe(function (data) {
              _this12.endQuestions();
            });
          } else {
            this.dialog.open(_incorrect_answer_incorrect_answer_component__WEBPACK_IMPORTED_MODULE_6__["IncorrectAnswerComponent"], {
              width: '400px',
              data: {
                isCorrect: isCorrect,
                question: this.currentQuestion
              },
              backdropClass: 'bg-danger',
              disableClose: true
            }).afterClosed().subscribe(function (data) {
              _this12.endQuestions();
            });
          }
        }
      }, {
        key: "endQuestions",
        value: function endQuestions() {
          if (this.questions.length > this.currentQuestionIndex) {
            this.currentQuestion = this.questions[this.currentQuestionIndex++];
          } else if (this.questions.length === this.currentQuestionIndex) {
            this.snackBar.open("Преминахте всички нива", "OK", {
              duration: 2000
            });
          }
        }
      }]);

      return AllQuestionsComponent;
    }();

    AllQuestionsComponent.ctorParameters = function () {
      return [{
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: src_app_category_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"]
      }];
    };

    AllQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-questions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-questions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question/all-questions/all-questions.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-questions.component.css */
      "./src/app/question/all-questions/all-questions.component.css")).default]
    })], AllQuestionsComponent);
    /***/
  },

  /***/
  "./src/app/question/correct-answer/correct-answer.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/question/correct-answer/correct-answer.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionCorrectAnswerCorrectAnswerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL2NvcnJlY3QtYW5zd2VyL2NvcnJlY3QtYW5zd2VyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/question/correct-answer/correct-answer.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/question/correct-answer/correct-answer.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CorrectAnswer, CorrectAnswerComponent */

  /***/
  function srcAppQuestionCorrectAnswerCorrectAnswerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorrectAnswer", function () {
      return CorrectAnswer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorrectAnswerComponent", function () {
      return CorrectAnswerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var CorrectAnswer = function CorrectAnswer() {
      _classCallCheck(this, CorrectAnswer);
    };

    var CorrectAnswerComponent = /*#__PURE__*/function () {
      function CorrectAnswerComponent(dialogRef, data) {
        _classCallCheck(this, CorrectAnswerComponent);

        this.data = data;
      }

      _createClass(CorrectAnswerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CorrectAnswerComponent;
    }();

    CorrectAnswerComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: CorrectAnswer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    CorrectAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-correct-answer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./correct-answer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question/correct-answer/correct-answer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./correct-answer.component.css */
      "./src/app/question/correct-answer/correct-answer.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], CorrectAnswerComponent);
    /***/
  },

  /***/
  "./src/app/question/edit-question/edit-question.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/question/edit-question/edit-question.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionEditQuestionEditQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\nul li {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vZWRpdC1xdWVzdGlvbi9lZGl0LXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL2VkaXQtcXVlc3Rpb24vZWRpdC1xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxudWwgbGkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/question/edit-question/edit-question.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/question/edit-question/edit-question.component.ts ***!
    \*******************************************************************/

  /*! exports provided: EditQuestion, EditQuestionComponent */

  /***/
  function srcAppQuestionEditQuestionEditQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditQuestion", function () {
      return EditQuestion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditQuestionComponent", function () {
      return EditQuestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/question.service */
    "./src/app/question/services/question.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var EditQuestion = function EditQuestion() {
      _classCallCheck(this, EditQuestion);
    };

    var EditQuestionComponent = /*#__PURE__*/function () {
      function EditQuestionComponent(dialogRef, data, questionService, snackBar) {
        _classCallCheck(this, EditQuestionComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.questionService = questionService;
        this.snackBar = snackBar;
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.data.question.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.data.question.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.isCorrect = false;
        this.question = this.data.question;
      }

      _createClass(EditQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addAnswer",
        value: function addAnswer() {
          var answer = {
            content: this.content,
            isCorrect: this.isCorrect
          };
          this.question.answers.push(answer);
          this.content = "";
          this.isCorrect = false;
        }
      }, {
        key: "editQuestion",
        value: function editQuestion() {
          var _this13 = this;

          this.question.title = this.editForm.value.title;
          this.question.description = this.editForm.value.description;

          if (this.editForm.valid) {
            this.snackBar.open("Въпросът се редактира", "OK", {
              duration: 2000
            });
            this.questionService.editQuestion(this.question.id, this.question).then(function (data) {
              _this13.dialogRef.close();

              _this13.snackBar.open("Въпросът е редактиран успешно!", "OK", {
                duration: 2000
              });
            });
          }
        }
      }, {
        key: "removeAnswer",
        value: function removeAnswer(index) {
          this.question.answers.splice(index, 1);
        }
      }, {
        key: "closeWindow",
        value: function closeWindow() {
          this.dialogRef.close();
        }
      }]);

      return EditQuestionComponent;
    }();

    EditQuestionComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: EditQuestion,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    EditQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question/edit-question/edit-question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-question.component.css */
      "./src/app/question/edit-question/edit-question.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], EditQuestionComponent);
    /***/
  },

  /***/
  "./src/app/question/incorrect-answer/incorrect-answer.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/question/incorrect-answer/incorrect-answer.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionIncorrectAnswerIncorrectAnswerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL2luY29ycmVjdC1hbnN3ZXIvaW5jb3JyZWN0LWFuc3dlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/question/incorrect-answer/incorrect-answer.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/question/incorrect-answer/incorrect-answer.component.ts ***!
    \*************************************************************************/

  /*! exports provided: IncorrectAnswer, IncorrectAnswerComponent */

  /***/
  function srcAppQuestionIncorrectAnswerIncorrectAnswerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncorrectAnswer", function () {
      return IncorrectAnswer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncorrectAnswerComponent", function () {
      return IncorrectAnswerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var IncorrectAnswer = function IncorrectAnswer() {
      _classCallCheck(this, IncorrectAnswer);
    };

    var IncorrectAnswerComponent = /*#__PURE__*/function () {
      function IncorrectAnswerComponent(dialogRef, data) {
        _classCallCheck(this, IncorrectAnswerComponent);

        this.data = data;
      }

      _createClass(IncorrectAnswerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.correctAnswers = this.data.question.answers.filter(function (a) {
            return a.isCorrect === true;
          });
        }
      }]);

      return IncorrectAnswerComponent;
    }();

    IncorrectAnswerComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: IncorrectAnswer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    IncorrectAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-incorrect-answer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./incorrect-answer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question/incorrect-answer/incorrect-answer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./incorrect-answer.component.css */
      "./src/app/question/incorrect-answer/incorrect-answer.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], IncorrectAnswerComponent);
    /***/
  },

  /***/
  "./src/app/question/list-questions/list-questions.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/question/list-questions/list-questions.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionListQuestionsListQuestionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\nul li {\r\n    cursor: pointer;\r\n}\r\n\r\nbutton {\r\n    outline: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vbGlzdC1xdWVzdGlvbnMvbGlzdC1xdWVzdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL2xpc3QtcXVlc3Rpb25zL2xpc3QtcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/question/list-questions/list-questions.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/question/list-questions/list-questions.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ListQuestionsComponent */

  /***/
  function srcAppQuestionListQuestionsListQuestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListQuestionsComponent", function () {
      return ListQuestionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/question.service */
    "./src/app/question/services/question.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _remove_question_remove_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../remove-question/remove-question.component */
    "./src/app/question/remove-question/remove-question.component.ts");
    /* harmony import */


    var _edit_question_edit_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../edit-question/edit-question.component */
    "./src/app/question/edit-question/edit-question.component.ts");

    var ListQuestionsComponent = /*#__PURE__*/function () {
      function ListQuestionsComponent(questionService, dialogRef, dialog) {
        _classCallCheck(this, ListQuestionsComponent);

        this.questionService = questionService;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.isShowAll = true;
      }

      _createClass(ListQuestionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAll();
        }
      }, {
        key: "getAll",
        value: function getAll() {
          var _this14 = this;

          this.questionService.getAll().subscribe(function (data) {
            _this14.questions = data;
          });
        }
      }, {
        key: "showQuestion",
        value: function showQuestion(id) {
          var _this15 = this;

          this.question = null;
          this.isShowAll = false;
          var subscription = this.questionService.getById(id).subscribe(function (data) {
            subscription.unsubscribe();
            _this15.question = data;
            _this15.question.id = id;
          });
        }
      }, {
        key: "showAll",
        value: function showAll() {
          this.isShowAll = true;
        }
      }, {
        key: "editQuestion",
        value: function editQuestion() {
          this.dialog.open(_edit_question_edit_question_component__WEBPACK_IMPORTED_MODULE_5__["EditQuestionComponent"], {
            width: '400px',
            data: {
              question: this.question
            },
            backdropClass: 'bg-primary',
            disableClose: true
          });
        }
      }, {
        key: "removeQuestion",
        value: function removeQuestion() {
          var _this16 = this;

          this.dialog.open(_remove_question_remove_question_component__WEBPACK_IMPORTED_MODULE_4__["RemoveQuestionComponent"], {
            width: '400px',
            data: {
              question: this.question
            },
            backdropClass: 'bg-danger',
            disableClose: true
          }).afterClosed().subscribe(function (data) {
            if (data) {
              _this16.dialogRef.close();
            }
          });
        }
      }, {
        key: "closeWindow",
        value: function closeWindow() {
          this.dialogRef.close();
        }
      }]);

      return ListQuestionsComponent;
    }();

    ListQuestionsComponent.ctorParameters = function () {
      return [{
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    ListQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-questions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-questions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question/list-questions/list-questions.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-questions.component.css */
      "./src/app/question/list-questions/list-questions.component.css")).default]
    })], ListQuestionsComponent);
    /***/
  },

  /***/
  "./src/app/question/models/question.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/question/models/question.model.ts ***!
    \***************************************************/

  /*! exports provided: Question */

  /***/
  function srcAppQuestionModelsQuestionModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Question", function () {
      return Question;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Question = function Question() {
      _classCallCheck(this, Question);
    };
    /***/

  },

  /***/
  "./src/app/question/question.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/question/question.module.ts ***!
    \*********************************************/

  /*! exports provided: QuestionModule */

  /***/
  function srcAppQuestionQuestionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionModule", function () {
      return QuestionModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/question.service */
    "./src/app/question/services/question.service.ts");
    /* harmony import */


    var _all_questions_all_questions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./all-questions/all-questions.component */
    "./src/app/question/all-questions/all-questions.component.ts");
    /* harmony import */


    var _correct_answer_correct_answer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./correct-answer/correct-answer.component */
    "./src/app/question/correct-answer/correct-answer.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _list_questions_list_questions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./list-questions/list-questions.component */
    "./src/app/question/list-questions/list-questions.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _remove_question_remove_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./remove-question/remove-question.component */
    "./src/app/question/remove-question/remove-question.component.ts");
    /* harmony import */


    var _incorrect_answer_incorrect_answer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./incorrect-answer/incorrect-answer.component */
    "./src/app/question/incorrect-answer/incorrect-answer.component.ts");

    var QuestionModule = function QuestionModule() {
      _classCallCheck(this, QuestionModule);
    };

    QuestionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_all_questions_all_questions_component__WEBPACK_IMPORTED_MODULE_4__["AllQuestionsComponent"], _correct_answer_correct_answer_component__WEBPACK_IMPORTED_MODULE_5__["CorrectAnswerComponent"], _list_questions_list_questions_component__WEBPACK_IMPORTED_MODULE_7__["ListQuestionsComponent"], _remove_question_remove_question_component__WEBPACK_IMPORTED_MODULE_11__["RemoveQuestionComponent"], _incorrect_answer_incorrect_answer_component__WEBPACK_IMPORTED_MODULE_12__["IncorrectAnswerComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"]],
      providers: [_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]],
      entryComponents: [_correct_answer_correct_answer_component__WEBPACK_IMPORTED_MODULE_5__["CorrectAnswerComponent"], _list_questions_list_questions_component__WEBPACK_IMPORTED_MODULE_7__["ListQuestionsComponent"], _remove_question_remove_question_component__WEBPACK_IMPORTED_MODULE_11__["RemoveQuestionComponent"], _incorrect_answer_incorrect_answer_component__WEBPACK_IMPORTED_MODULE_12__["IncorrectAnswerComponent"]]
    })], QuestionModule);
    /***/
  },

  /***/
  "./src/app/question/remove-question/remove-question.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/question/remove-question/remove-question.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionRemoveQuestionRemoveQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\r\n    outline: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vcmVtb3ZlLXF1ZXN0aW9uL3JlbW92ZS1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL3JlbW92ZS1xdWVzdGlvbi9yZW1vdmUtcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/question/remove-question/remove-question.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/question/remove-question/remove-question.component.ts ***!
    \***********************************************************************/

  /*! exports provided: RemoveQuestionComponent */

  /***/
  function srcAppQuestionRemoveQuestionRemoveQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveQuestionComponent", function () {
      return RemoveQuestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_question_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/question.model */
    "./src/app/question/models/question.model.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/question.service */
    "./src/app/question/services/question.service.ts");

    var RemoveQuestionComponent = /*#__PURE__*/function () {
      function RemoveQuestionComponent(dialogRef, data, snackBar, questionService) {
        _classCallCheck(this, RemoveQuestionComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.questionService = questionService;
      }

      _createClass(RemoveQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "removeQuestion",
        value: function removeQuestion(id) {
          var _this17 = this;

          this.snackBar.open("Изтриване на този въпрос", "OK", {
            duration: 2000
          });
          this.questionService.removeQuestion(id).then(function (data) {
            _this17.snackBar.open("Въпросът е изтрит", "OK", {
              duration: 2000
            });
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.dialogRef.close();
        }
      }]);

      return RemoveQuestionComponent;
    }();

    RemoveQuestionComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: _models_question_model__WEBPACK_IMPORTED_MODULE_2__["Question"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"]
      }];
    };

    RemoveQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-remove-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./remove-question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question/remove-question/remove-question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./remove-question.component.css */
      "./src/app/question/remove-question/remove-question.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], RemoveQuestionComponent);
    /***/
  },

  /***/
  "./src/app/question/services/question.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/question/services/question.service.ts ***!
    \*******************************************************/

  /*! exports provided: QuestionService */

  /***/
  function srcAppQuestionServicesQuestionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionService", function () {
      return QuestionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var QuestionService = /*#__PURE__*/function () {
      function QuestionService(fs) {
        _classCallCheck(this, QuestionService);

        this.fs = fs;
        this.questions = this.fs.collection("questions");
      }

      _createClass(QuestionService, [{
        key: "getAll",
        value: function getAll() {
          return this.questions.valueChanges({
            idField: 'id'
          });
        }
      }, {
        key: "addQuestion",
        value: function addQuestion(question) {
          return this.questions.add(question);
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.questions.doc(id).valueChanges();
        }
      }, {
        key: "removeQuestion",
        value: function removeQuestion(id) {
          return this.questions.doc(id).delete();
        }
      }, {
        key: "editQuestion",
        value: function editQuestion(id, question) {
          return this.questions.doc(id).set(question, {
            merge: true
          });
        }
      }, {
        key: "getAllByCategory",
        value: function getAllByCategory(categoryId) {
          return this.fs.collection("questions", function (ref) {
            return ref.where('categoryId', '==', categoryId);
          }).valueChanges();
        }
      }]);

      return QuestionService;
    }();

    QuestionService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuestionService);
    /***/
  },

  /***/
  "./src/app/question/status-question/status-question.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/question/status-question/status-question.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionStatusQuestionStatusQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL3N0YXR1cy1xdWVzdGlvbi9zdGF0dXMtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/question/status-question/status-question.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/question/status-question/status-question.component.ts ***!
    \***********************************************************************/

  /*! exports provided: StatusQuestionComponent */

  /***/
  function srcAppQuestionStatusQuestionStatusQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusQuestionComponent", function () {
      return StatusQuestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_question_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/question.model */
    "./src/app/question/models/question.model.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var StatusQuestionComponent = /*#__PURE__*/function () {
      function StatusQuestionComponent(dialogRef, data) {
        _classCallCheck(this, StatusQuestionComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(StatusQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StatusQuestionComponent;
    }();

    StatusQuestionComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: _models_question_model__WEBPACK_IMPORTED_MODULE_2__["Question"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    StatusQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-status-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./status-question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question/status-question/status-question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./status-question.component.css */
      "./src/app/question/status-question/status-question.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], StatusQuestionComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyDlTkEuHU2t8YZv7x37ar-9dAg8tBGhujo",
        authDomain: "quiz-7e7b8.firebaseapp.com",
        databaseURL: "https://quiz-7e7b8.firebaseio.com",
        projectId: "quiz-7e7b8",
        storageBucket: "quiz-7e7b8.appspot.com",
        messagingSenderId: "647452139649",
        appId: "1:647452139649:web:d5899a608e9181b3e16d80",
        measurementId: "G-PF1MNWN022"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Angular\quiz\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map