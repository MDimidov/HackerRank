class Result
{

    /*
     * Complete the 'twoStacks' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER maxSum
     *  2. INTEGER_ARRAY a
     *  3. INTEGER_ARRAY b
     */

    public static int twoStacks(int maxSum, List<int> a, List<int> b)
    {
        int sum = 0;
        int games = 0;

        int num1 = int.MaxValue;
        int num2 = int.MaxValue;

        Stack<int> stack = new Stack<int>();

        while (sum < maxSum)
        {
            if (a.Count > 0) num1 = a[0];
            else num1 = int.MaxValue;
            if (b.Count > 0) num2 = b[0];
            else num2 = int.MaxValue;

            if (num1 > num2)
            {
                sum += num2;
                b.RemoveAt(0);
                stack.Push(num1);
                games++;
            }
            else if (num1 < num2)
            {
                sum += num1;
                stack.Push(num2);
                a.RemoveAt(0);
                games++;
            }
        }

        if (sum > maxSum) games--;

        int gamesStack = stack.Count();
        if (games > gamesStack)
        {
            return games;
        }
        else
            return gamesStack;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        //TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int g = Convert.ToInt32(Console.ReadLine().Trim());

        for (int gItr = 0; gItr < g; gItr++)
        {
            string[] firstMultipleInput = Console.ReadLine().TrimEnd().Split(' ');

            int n = Convert.ToInt32(firstMultipleInput[0]);

            int m = Convert.ToInt32(firstMultipleInput[1]);

            int maxSum = Convert.ToInt32(firstMultipleInput[2]);

            List<int> a = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(aTemp => Convert.ToInt32(aTemp)).ToList();

            List<int> b = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(bTemp => Convert.ToInt32(bTemp)).ToList();

            int result = Result.twoStacks(maxSum, a, b);

            Console.WriteLine(result);
        }

        //textWriter.Flush();
        //textWriter.Close();
    }
}
