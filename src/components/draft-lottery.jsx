import React, { Component } from 'react';
import '../styles/global.css';
import '../styles/draft-lottery.css';

class DraftLottery extends Component {
	lotteryTeams = [
		{
			name: 'Nick Routh',
			position: 7,
			selected: false,
			lotteryPercentage: 0,
		},
		{
			name: 'Ryan Silva',
			position: 8,
			selected: false,
			lotteryPercentage: 0,
		},
		{
			name: 'Max Clinch',
			position: 9,
			selected: false,
			lotteryPercentage: 0,
		},
		{
			name: 'Max Nelson',
			position: 10,
			selected: false,
			lotteryPercentage: 0,
		},
		{
			name: 'Joey Pellegrino',
			position: 11,
			selected: false,
			lotteryPercentage: 0,
		},
		{
			name: 'Bryce Hairabedian',
			position: 12,
			selected: false,
			lotteryPercentage: 0,
		},
	];

	playoffTeams = [
		{
			name: 'Nick Routh',
			position: 7,
			selected: false,
			lotteryPercentage: 0,
		},
		{
			name: 'Ryan Silva',
			position: 8,
			selected: false,
			lotteryPercentage: 0,
		},
		{
			name: 'Max Clinch',
			position: 9,
			selected: false,
			lotteryPercentage: 0,
		},
		{
			name: 'Max Nelson',
			position: 10,
			selected: false,
			lotteryPercentage: 0,
		},
		{
			name: 'Joey Pellegrino',
			position: 11,
			selected: false,
			lotteryPercentage: 0,
		},
		{
			name: 'Bryce Hairabedian',
			position: 12,
			selected: false,
			lotteryPercentage: 0,
		},
	];

	render() {
		return (
			<>
				<h2>Draft Lottery</h2>
				<div className="columns">
					<div className="column">First column</div>
					<div className="column">Second column</div>
					<div className="column">Third column</div>
					<div className="column">Fourth column</div>
				</div>
			</>
		);
	}
}

export default DraftLottery;
