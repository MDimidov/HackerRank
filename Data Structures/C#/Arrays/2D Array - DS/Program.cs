class Result
{

    /*
     * Complete the 'hourglassSum' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts 2D_INTEGER_ARRAY arr as parameter.
     */

    public static int hourglassSum(List<List<int>> arr)
    {
        int totalSum = int.MinValue;
        for (int i = 0; i < arr.Count; i++)
        {
            int currSum = 0;
            for (int j = 0; j < arr[i].Count; j++)
            {
                if (j + 2 < arr[i].Count && i + 2 < arr.Count)
                {
                    currSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
                    currSum += arr[i + 1][j + 1];
                    currSum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

                    Console.WriteLine(currSum);

                    if (currSum > totalSum)
                    {
                        totalSum = currSum;
                    }
                }
            }
        }

        return totalSum;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        //TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        List<List<int>> arr = new List<List<int>>();

        for (int i = 0; i < 6; i++)
        {
            arr.Add(Console.ReadLine().TrimEnd().Split(' ').ToList().Select(arrTemp => Convert.ToInt32(arrTemp)).ToList());
        }

        int result = Result.hourglassSum(arr);

        Console.WriteLine(result);

        //textWriter.Flush();
        //textWriter.Close();
    }
}
