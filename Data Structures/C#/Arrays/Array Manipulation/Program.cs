class Result
{

    /*
     * Complete the 'arrayManipulation' function below.
     *
     * The function is expected to return a LONG_INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER n
     *  2. 2D_INTEGER_ARRAY queries
     */

    public static long arrayManipulation(int n, List<List<int>> queries)
    {
        long[] ints = new long[n + 1];

        foreach (var query in queries)
        {
            ints[query[0] - 1] += query[2];
            if (query[1] < n)
            {
                ints[query[1]] -= query[2];
            }
        }

        long max = 0;
        long current = 0;

        for (int i = 0; i < n; i++)
        {
            current += ints[i];
            if (current > max)
            {
                max = current;
            }
        }

        return max;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        //TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string[] firstMultipleInput = Console.ReadLine().TrimEnd().Split(' ');

        int n = Convert.ToInt32(firstMultipleInput[0]);

        int m = Convert.ToInt32(firstMultipleInput[1]);

        List<List<int>> queries = new List<List<int>>();

        for (int i = 0; i < m; i++)
        {
            queries.Add(Console.ReadLine().TrimEnd().Split(' ').ToList().Select(queriesTemp => Convert.ToInt32(queriesTemp)).ToList());
        }

        long result = Result.arrayManipulation(n, queries);

        Console.WriteLine(result);

        //textWriter.Flush();
        //textWriter.Close();
    }
}
