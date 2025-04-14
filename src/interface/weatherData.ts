// export interface WeatherData {
//     temperature: number;
//     humidity: number;
//     description: string;
//     cityName: string;
//     pressure: number;
//     main: any;
//     name: string;
//     weather: any;
//     icon: string;
//   }

export interface WeatherData {
    main: {
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
    };
    name: string;
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
  }
  