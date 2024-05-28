# betterLeaderboard
Unofficial leaderboard for the sliding puzzle simulator at slidysim.com. 

Access it [here](https://dphdmn.github.io/betterLeaderboard/).

[submit your youtube videos to leaderboard](https://docs.google.com/forms/d/e/1FAIpQLSd14jEa6wVTrRkgiuEBKdC8nvdU4JjRfVuOIuPTtkl1zzzKxA/viewform).

## New project - Slidysim Session Tracker
Hey, do you like slidysim? You have found this page? Check this! https://github.com/dphdmn/slidysimSessionTracker

## Note - February 29, 2024
Changed update frequency from hourly to every 6 hours to reduce GitHub spam and annoyance.

## Note - April 7, 2024
Performed cleanup on the repository to manage its size (reached 3 GB for 6 months), mainly due to hourly updates before March. With the switch to 6-hour intervals, repository growth is now more manageable.

Backups spanning November 2023 to April 2024 (excluding solve data) are available [here](https://drive.google.com/file/d/1dzUc0bwpY4PUppNLjEXhW1WWHCu7CL-V/view?usp=sharing). Solve data backups were not kept due to laziness.

To view backups, clone the repository locally, replace the backup file as "data/leaderboard.json", and run it on your server.

[Considering adding a button for loading older leaderboard data from a file.](https://github.com/dphdmn/betterLeaderboard/issues/9)

## Update - April 16, 2024 - v.1.1.0
v.1.1.0 - You can now [submit your youtube videos to leaderboard](https://docs.google.com/forms/d/e/1FAIpQLSd14jEa6wVTrRkgiuEBKdC8nvdU4JjRfVuOIuPTtkl1zzzKxA/viewform).

## Update - April 22, 2024 - v1.2.0
v1.2.0 changes:
- Fixed some issues with replay. 
- Implemented custom movetimes feature.

Example:

1) Click on 4x4 single 1.125 PB by me (dphdmn);
2) Enter custom movetimes as ``0, 7, 37, 67, 97, 127, 127, 188, 195, 225, 262, 345, 381, 467, 471, 487, 501, 526, 555, 592, 616, 742, 802, 831, 891, 915, 921, 968, 1005, 1019, 1027, 1057, 1125, 1125``;
3) Watch the replay with correct timings!;
4) It is very basic, no checks are being done, so the data must be correct;
5) See v.1.3.0 changes for automated use of it for your solves.

## Update - April 24, 2024 - v1.3.0
v1.3.0 - Replay links now support moveTimes [For example, check this!](https://github.com/dphdmn/getLatestSolve/tree/main)

Or this!  https://github.com/dphdmn/slidysimSessionTracker

## Update - May 28, 2024 - v1.4.0

### Major changes:
- **Enhanced Replay Overlay**: Improved compatibility with mobile devices and optimized performance, especially for larger puzzles. Replays are now intelligently positioned at the top for excessively large puzzles, improving user experience. Implemented a refined square size formula adaptable to various screen widths and puzzle sizes. Introduced warning messages and autoscrolling for seamless usability enhancements (1.3.4, 1.3.5, 1.3.6, 1.3.7).
- **Manual Replay Initiation**: Replays no longer start automatically, addressing issues with YouTube link accessibility and a rewind feature bug. Users now have manual control over replay initiation, improving usability and functionality (1.3.1 and 1.3.8).
- **Red Egg Icon and "Hide/Load Solve Data" Button**: Introduced a distinct red egg icon for replays containing both YouTube and solve data, providing clearer differentiation. Adjusted the functionality of the "YT only" button to hide solve data instead of deleting it, enhancing user experience and retention of solve data (1.3.3 and 1.3.9).

#### Other Changes:
- **Replay Icon Update**: Replaced the previous emoji representation with an image for consistency across devices (1.3.1).
- **Expanded Puzzle Sizes and Interface Tweaks**: Enhanced user experience by expanding puzzle size options and implementing minor interface improvements (1.3.9).
- **Fair Record Sorting**: Addressed a bug related to resolving tied move count world records, ensuring fairness by sorting them based on timestamp (1.3.10).
- **Fixed Custom Move Time Preservation**: Rectified a bug associated with the "Force Fringe" button when loading custom move times, ensuring the preservation of custom move times as intended (1.3.11).