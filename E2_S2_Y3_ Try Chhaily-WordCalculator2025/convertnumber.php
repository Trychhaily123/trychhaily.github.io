<?php

$exchangeRate = 4000;


function numberToWordsEnglish($number) {
    $ones = array(
        1 => "One", 2 => "Two", 3 => "Three", 4 => "Four", 5 => "Five", 6 => "Six",
        7 => "Seven", 8 => "Eight", 9 => "Nine", 10 => "Ten", 11 => "Eleven", 12 => "Twelve",
        13 => "Thirteen", 14 => "Fourteen", 15 => "Fifteen", 16 => "Sixteen", 17 => "Seventeen",
        18 => "Eighteen", 19 => "Nineteen"
    );
    $tens = array(
        2 => "Twenty", 3 => "Thirty", 4 => "Forty", 5 => "Fifty", 6 => "Sixty",
        7 => "Seventy", 8 => "Eighty", 9 => "Ninety"
    );
    $thousands = array(
        1 => "Thousand", 2 => "Million", 3 => "Billion", 4 => "Trillion"
    );

    if (($number < 0) || ($number > 999999999999)) {
        return "Number out of range";
    }

    $numStr = (string)$number;
    $numLen = strlen($numStr);

    if ($numLen == 0) {
        return "Zero";
    }

    if ($numLen > 3) {
        $maxGroups = (int)(($numLen + 2) / 3);
        $groups = array();
        $numStr = str_pad($numStr, $maxGroups * 3, ' ', STR_PAD_LEFT);

        for ($i = 0; $i < $maxGroups; $i++) {
            $groups[] = substr($numStr, ($i * 3), 3);
        }

        $result = "";
        foreach ($groups as $index => $group) {
            if ($group != '000') {
                $result .= numberToWordsEnglish(intval($group)) . ' ' . $thousands[$maxGroups - $index - 1] . ' ';
            }
        }
        return trim($result);
    } else {
        $result = "";
        $hundreds = (int)($number / 100);
        $tensOnes = $number % 100;

        if ($hundreds) {
            $result .= $ones[$hundreds] . " Hundred ";
        }

        if ($tensOnes) {
            if ($tensOnes < 20) {
                $result .= $ones[$tensOnes];
            } else {
                $result .= $tens[(int)($tensOnes / 10)];
                if (($tensOnes % 10)) {
                    $result .= ' ' . $ones[$tensOnes % 10];
                }
            }
        }
        return trim($result);
    }
}


function numberToWordsKhmer($number) {
    $ones = array(
        1 => "មួយ", 2 => "ពីរ", 3 => "បី", 4 => "បួន", 5 => "ប្រាំ", 6 => "ប្រាំមួយ",
        7 => "ប្រាំពីរ", 8 => "ប្រាំបី", 9 => "ប្រាំបួន"
    );
    $tens = array(
        2 => "ម្ភៃ", 3 => "សាមសិប", 4 => "សែសិប", 5 => "ហាសិប", 6 => "ហុកសិប",
        7 => "ចិតសិប", 8 => "ប៉ែតសិប", 9 => "កៅសិប"
    );
    $thousands = array(
        1 => "ពាន់", 2 => "លាន", 3 => "ប៊ីលាន", 4 => "ទ្រីលាន"
    );

    if (($number < 0) || ($number > 999999999999)) {
        return "លេខនៅក្រៅជួរ";
    }

    $numStr = (string)$number;
    $numLen = strlen($numStr);

    if ($numLen == 0) {
        return "សូន្យ";
    }

    if ($numLen > 3) {
        $maxGroups = (int)(($numLen + 2) / 3);
        $groups = array();
        $numStr = str_pad($numStr, $maxGroups * 3, ' ', STR_PAD_LEFT);

        for ($i = 0; $i < $maxGroups; $i++) {
            $groups[] = substr($numStr, ($i * 3), 3);
        }

        $result = "";
        foreach ($groups as $index => $group) {
            if ($group != '000') {
                $result .= numberToWordsKhmer(intval($group)) . ' ' . $thousands[$maxGroups - $index - 1] . ' ';
            }
        }
        return trim($result);
    } else {
        $result = "";
        $hundreds = (int)($number / 100);
        $tensOnes = $number % 100;

        if ($hundreds) {
            $result .= $ones[$hundreds] . " រយ ";
        }

        if ($tensOnes) {
            if ($tensOnes < 20) {
                $result .= $ones[$tensOnes];
            } else {
                $result .= $tens[(int)($tensOnes / 10)];
                if (($tensOnes % 10)) {
                    $result .= ' ' . $ones[$tensOnes % 10];
                }
            }
        }
        return trim($result);
    }
}

// Submit Form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $riel = $_POST["riel"];

    if (!is_numeric($riel)) {
        echo "<p style='color:red;'>សូមបញ្ចូលតែលេខប៉ុណ្ណោះ!</p>";
    } else {
        // បម្លែងទៅជាពាក្យ
        $englishWords = numberToWordsEnglish($riel);
        $khmerWords = numberToWordsKhmer($riel);

        // បម្លែងទៅជាដុល្លារ
        $usd = round($riel / $exchangeRate, 2);

        // រក្សាទុកក្នុង Text File
        $file = fopen("current_projects.txt", "a");
        fwrite($file, "Riel: " . $riel . ", USD: " . $usd . "\n");
        fclose($file);

        // បង្ហាញលទ្ធផល
        echo "<p style='color:red;'>Riel: " . $riel . "</p>";
        echo "<p style='color:red;'>English: " . $englishWords . " Riel</p>";
        echo "<p style='color:red;'>Khmer: " . $khmerWords . " រៀល</p>";
        echo "<p style='color:blue;'>USD: $" . $usd . "</p>";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title> Calculator</title>
</head>
<body>
    <h1>Numbers Calculator</h1>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        Please input your data: <input type="text" name="riel">
        <input type="submit" value="Submit">
    </form>
</body>
</html>