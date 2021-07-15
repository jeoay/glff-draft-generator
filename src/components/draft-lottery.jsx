import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import '../styles/global.css';
import '../styles/draft-lottery.css';

class DraftLottery extends Component {
	title = 'Draft Lottery';
	columnTitle = ['2020 Final Results:', 'Next Pick:', '2021 Draft Order:'];

	allTeams = [
		{
			name: 'Jared Nelson',
			standing: 1,
			selected: true,
			lotteryPercentage: 0,
		},
		{
			name: 'Akis Yerocostas',
			standing: 2,
			selected: true,
			lotteryPercentage: 0,
		},
		{
			name: 'Nick Routh',
			standing: 3,
			selected: true,
			lotteryPercentage: 0,
		},
		{
			name: 'Max Clinch',
			standing: 4,
			selected: true,
			lotteryPercentage: 0,
		},
		{
			name: 'Joel Andersen',
			standing: 5,
			selected: true,
			lotteryPercentage: 0,
		},
		{
			name: 'Ryan Silva',
			standing: 6,
			selected: true,
			lotteryPercentage: 0,
		},
		{
			name: 'Joey Pellegrino',
			standing: 7,
			selected: false,
			lotteryPercentage: 35,
		},
		{
			name: 'Max Nelson',
			standing: 8,
			selected: false,
			lotteryPercentage: 25,
		},
		{
			name: 'Brian Galli',
			standing: 9,
			selected: false,
			lotteryPercentage: 17,
		},
		{
			name: 'Bryce Hairabedian',
			standing: 10,
			selected: false,
			lotteryPercentage: 10,
		},
		{
			name: 'Scotty Shaw',
			standing: 11,
			selected: false,
			lotteryPercentage: 8,
		},
		{
			name: 'Gianni Vernon',
			standing: 12,
			selected: false,
			lotteryPercentage: 5,
		},
	];

	startLottery() {
		console.log('clicked');
	}

	render() {
		const goldTrophyIcon = (
			<FontAwesomeIcon icon={faTrophy} className="gold-icon" />
		);
		const silverTrophyIcon = (
			<FontAwesomeIcon icon={faTrophy} className="silver-icon" />
		);
		const bronzeTrophyIcon = (
			<FontAwesomeIcon icon={faTrophy} className="bronze-icon" />
		);
		const finalStandings = [];
		this.allTeams.forEach((team) => {
			switch (team.standing) {
				case 1:
					finalStandings.push(
						<li key={team.standing}>
							{team.standing}. {team.name} {goldTrophyIcon}
						</li>
					);
					break;
				case 2:
					finalStandings.push(
						<li key={team.standing}>
							{team.standing}. {team.name} {silverTrophyIcon}
						</li>
					);
					break;
				case 3:
					finalStandings.push(
						<li key={team.standing}>
							{team.standing}. {team.name} {bronzeTrophyIcon}
						</li>
					);
					break;
				default:
					if (team.lotteryPercentage === 0) {
						finalStandings.push(
							<li key={team.standing}>
								{team.standing}. {team.name}
							</li>
						);
					} else {
						finalStandings.push(
							<li key={team.standing}>
								{team.standing}. {team.name}, {team.lotteryPercentage}%
							</li>
						);
					}
			}
		});

		return (
			<>
				<h1 className="lottery-title">
					{this.title}
					<br />
					<button
						className="button is-primary start-button"
						onClick={this.startLottery}>
						Start!
					</button>
				</h1>

				<div className="columns">
					<div className="column">
						<h5>{this.columnTitle[0]}</h5>
						<div className="standings">{finalStandings}</div>
					</div>
					<div className="column">
						<h5>{this.columnTitle[1]}</h5>
					</div>
					<div className="column">
						<h5>{this.columnTitle[2]}</h5>
					</div>
				</div>
			</>
		);
	}
}

export default DraftLottery;
