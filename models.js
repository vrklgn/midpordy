function Game() {
	this.players = [];
	this.boards = [];
	this.answersAccepted = false;
	this.playersThatHaveAnswered = [];
	this.currentQuestion;
	this.currentQuestionElement;
}

Game.prototype.playerHasAnswered = function(player) {
	// See if player is already in this.playersThatHaveAnswered…
	for(var i = 0; i < this.players.length; i++) {
		if(this.playersThatHaveAnswered[i] === player) return true;
	}
	
	return false;
}

Game.prototype.addCategoryToFirstBoard = function(category) {
    if (this.boards.length > 0) {
        this.boards[0].addCategory(category);
    } else {
        console.error("No boards initialized in the game.");
    }
};

Game.prototype.addCategoryToSecondBoard = function(category) {
    if (this.boards.length > 0) {
        this.boards[1].addCategory(category);
    } else {
        console.error("No boards initialized in the game.");
    }
};

function Board() {
	this.categories = [];
	this.questionsShown = 0;
}

Board.prototype.hasShownAllQuestions = function() {
	if(this.questionsShown >= this.questions.length) {
		return true;
	}
	
	return false;
}

Board.prototype.addCategory = function(category) {
    this.categories.push(category);
};

function Category() {
	this.title = "Undefined Category";
	this.questions = [];
}

function Question() {
	this.title = "Undefined question";
	this.points = 0;
	this.shown = false;
}


function Player() {
	this.score = 0;
};

Player.prototype.playSound = function() {
	// Play dat sound!
}