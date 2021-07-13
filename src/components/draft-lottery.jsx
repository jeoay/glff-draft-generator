import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import '../styles/global.css';
import '../styles/draft-lottery.css';

class DraftLottery extends Component {
	title = 'Draft Lottery';
	columnTitle = [
		'2020 Final Results:',
		'Second Col',
		'Third Col',
		'Fourth Col',
	];

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
			lotteryPercentage: 0,
		},
		{
			name: 'Max Nelson',
			standing: 8,
			selected: false,
			lotteryPercentage: 0,
		},
		{
			name: 'Brian Galli',
			standing: 9,
			selected: false,
			lotteryPercentage: 0,
		},
		{
			name: 'Bryce Hairabedian',
			standing: 10,
			selected: false,
			lotteryPercentage: 0,
		},
		{
			name: 'Scotty Shaw',
			standing: 11,
			selected: false,
			lotteryPercentage: 0,
		},
		{
			name: 'Gianni Vernon',
			standing: 12,
			selected: false,
			lotteryPercentage: 0,
		},
	];

	render() {
		const trophyIcon = (
			<FontAwesomeIcon icon={faTrophy} className="gold-icon" />
		);
		const finalStandings = [];
		this.allTeams.forEach((team) => {
			finalStandings.push(
				<li key={team.standing}>
					{team.standing}. {team.name} {trophyIcon}
				</li>
			);
		});

		return (
			<>
				<h1 className="lottery-title">{this.title}</h1>
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
					<div className="column">
						<h5>{this.columnTitle[3]}</h5>
					</div>
				</div>
			</>
		);
	}
}

export default DraftLottery;
