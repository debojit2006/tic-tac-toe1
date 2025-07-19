public class TicTacToeGame {
    private char[] board = new char[9];
    private char currentPlayer = 'X';

    public TicTacToeGame() {
        // Initialize the board with empty spaces
        for (int i = 0; i < 9; i++) {
            board[i] = ' ';
        }
    }

    // Method to handle a player's move
    public boolean makeMove(int index) {
        if (board[index] == ' ') {
            board[index] = currentPlayer;
            currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
            return true; // Move was successful
        }
        return false; // Cell was already taken
    }

    // Method to check for a winner
    public char checkWinner() {
        // Winning combinations
        int[][] winConditions = {
            {0, 1, 2}, {3, 4, 5}, {6, 7, 8}, // Rows
            {0, 3, 6}, {1, 4, 7}, {2, 5, 8}, // Columns
            {0, 4, 8}, {2, 4, 6}             // Diagonals
        };

        for (int[] condition : winConditions) {
            if (board[condition[0]] == board[condition[1]] &&
                board[condition[1]] == board[condition[2]] &&
                board[condition[0]] != ' ') {
                return board[condition[0]]; // Return 'X' or 'O'
            }
        }
        return ' '; // No winner yet
    }

    // Method to get the current board state
    public char[] getBoard() {
        return board;
    }
}
