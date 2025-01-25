class Result
{

    /*
     * Complete the 'largestRectangle' function below.
     *
     * The function is expected to return a LONG_INTEGER.
     * The function accepts INTEGER_ARRAY h as parameter.
     */

    public static long largestRectangle(List<int> h)
    {
        long max = int.MinValue;

        for (int i = 0; i < h.Count; i++)
        {
            int startIndex = 0;
            int lastIndex = h.Count;
            int current;

            // Find max index for current rectangle
            for (int j = i; j < h.Count; j++)
            {
                if (h[j] < h[i])
                {
                    lastIndex = j;
                    break;
                }
            }

            // Skip first rotation
            if (i != 0)
            {
            // Find min index for current rectangle
                for (int j = i - 1; j >= 0; j--)
                {
                    if (h[j] < h[i])
                    {
                        startIndex = j + 1;
                        break;
                    }
                }
            }

            current = (lastIndex - startIndex) * h[i];

            // Take the max rectangle
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

        int n = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> h = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(hTemp => Convert.ToInt32(hTemp)).ToList();

        long result = Result.largestRectangle(h);

        Console.WriteLine(result);

        //textWriter.Flush();
        //textWriter.Close();
    }
}
