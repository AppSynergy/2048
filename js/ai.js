/*
 * AI for 2048
 * This version of the game will play itself.
 */
GameManager.prototype.runAI = function() {
	this.flipFlop = (!(this.flipFlop));
	var self = this;
	setTimeout(function(){ self.proceedAI(); }, 200);
}

GameManager.prototype.proceedAI = function() {
	if (this.problemCounter > 3) {
		//console.log("hail mary move");	
		this.notStuck = this.move(2);
		this.problemCounter = 0;
	}
	if (!this.notStuck) {
		//console.log("problem move");
		this.notStuck = this.move(3);
		if (!this.notStuck) {
			this.problemCounter++;
		}
	} else {
		//console.log("normal move");
		this.notStuck = this.move((this.flipFlop) ? 1 : 0);
	}
	
	if (this.stopFlag == false) this.runAI();
}

GameManager.prototype.stop = function() { this.stopFlag = true; }